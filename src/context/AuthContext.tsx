import api from 'api/api';
import { parseCookies, destroyCookie, setCookie } from 'nookies';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

interface User {
  email: string;
  id: string;
  name: string;
  username?: string;
}

interface ICredentials {
  email: string;
  password: string;
}

interface IUserData {
  user: User;
  token: string;
}

interface IAuthContext {
  user: User;
  signIn(credentials: ICredentials): Promise<void>;
  signOut(): Promise<void>;
}

interface IAuthProvider {
  children: React.ReactNode;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [data, setData] = useState<IUserData>({} as IUserData);

  const signIn = useCallback(async (credentials: ICredentials) => {
    const response = await api.post('/sessions', credentials);

    const { user, token } = response.data as IUserData;

    const userFormatted = {
      name: user.name,
      username: user.username,
    };

    setCookie(null, 'token', token);
    setCookie(null, 'user', JSON.stringify(userFormatted));

    setData({ user, token });
  }, []);

  const signOut = useCallback(async () => {
    destroyCookie(null, 'token');
    destroyCookie(null, 'user');

    setData({} as IUserData);
  }, []);

  useEffect(() => {
    const { token, user } = parseCookies() || '';

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ user: JSON.parse(user), token });
      return;
    }
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};
