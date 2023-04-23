import routesAPI from 'api/routesAPI';
import { AxiosResponse } from 'axios';
import { signIn, SignInOptions, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
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
  name?: string;
  username?: string;
  isIncomplete: boolean;
}

interface ISignInData {
  credentials?: SignInOptions;
  provider: string;
}

interface IAuthContext {
  user: User;
  signin(credentials: ISignInData): Promise<any>;
  signout(): Promise<void>;
  getData(): Promise<User>;
}

interface IAuthProvider {
  children: React.ReactNode;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [userData, setUserData] = useState<User>({} as User);
  const { data: session } = useSession();
  const { push, pathname } = useRouter();

  const getData = useCallback(async (): Promise<User> => {
    const response: AxiosResponse<User> = await routesAPI.get(`/user`);

    return response.data;
  }, []);

  const signin = useCallback(async (data: ISignInData) => {
    try {
      const result = await signIn(data.provider, data.credentials);

      return result;
    } catch {
      throw new Error('Error');
    }
  }, []);

  const signout = useCallback(async () => {
    await signOut();

    push(pathname);
  }, [pathname, push]);

  useEffect(() => {
    (async () => {
      if (session?.user?.name) {
        const user = await getData();

        setUserData(user);
      }
    })();
  }, [getData]);

  return (
    <AuthContext.Provider value={{ signin, signout, user: userData, getData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};
