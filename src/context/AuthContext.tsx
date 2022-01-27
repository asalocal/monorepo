import api from 'api/api';
import { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import { parseCookies, destroyCookie, setCookie } from 'nookies';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

export interface UserComplete {
  id: string;
  name: string;
  email: string;
  birth_date: Date;
  password: string;
  isincomplete: boolean;
  subtitle?: string;
  username?: string;
  createdat: string;
  updatedat: string;
  cellphone: string | null;
}
export interface User {
  email: string;
  id: string;
  name: string;
  username?: string;
  isIncomplete: boolean;
}

interface ICredentials {
  email: string;
  password: string;
}

interface IUserData {
  user: User;
  token: string;
  refreshToken: {
    id: string;
    userId: string;
    token: string;
    expiresIn: number;
  };
}

interface IAuthContext {
  user: User;
  signIn(credentials: ICredentials): Promise<void>;
  signOut(): Promise<void>;
  getData(): Promise<User>;
}

interface IAuthProvider {
  children: React.ReactNode;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [data, setData] = useState<IUserData>((): IUserData => {
    const { token, user, refresh_token } = parseCookies() || '';

    if (token && user && refresh_token) {
      return {
        token,
        user: JSON.parse(user),
        refreshToken: JSON.parse(refresh_token),
      } as IUserData;
    }

    return {} as IUserData;
  });

  const { push, pathname } = useRouter();

  const getData = useCallback(async (): Promise<User> => {
    const { user } = parseCookies() || '';

    const userParsed = JSON.parse(user);

    const response: AxiosResponse<User> = await api.get(
      `/users/${userParsed.id}`,
      {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }
    );

    return response.data;
  }, [data.token]);

  const signIn = useCallback(async (credentials: ICredentials) => {
    const response = await api.post('/sessions', credentials);

    console.log(response);

    const { user, token, refreshToken } = response.data as IUserData;

    const userFormatted = {
      id: user.id,
      name: user.name,
      email: user.email,
      username: user.username,
      isIncomplete: user.isIncomplete,
    };

    setCookie(null, 'token', token);
    setCookie(null, 'user', JSON.stringify(userFormatted));
    setCookie(null, 'refresh_token', JSON.stringify(refreshToken));
    setData({ user: userFormatted, token, refreshToken });
  }, []);

  const signOut = useCallback(async () => {
    destroyCookie(null, 'token');
    destroyCookie(null, 'user');

    setData({} as IUserData);

    push(pathname);
  }, [pathname, push]);

  useEffect(() => {
    const { token, user, refresh_token } = parseCookies() || '';

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({
        user: JSON.parse(user),
        token,
        refreshToken: JSON.parse(refresh_token),
      });
      return;
    }
  }, []);

  return (
    <>
      <AuthContext.Provider
        value={{ signIn, signOut, user: data.user, getData }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};
