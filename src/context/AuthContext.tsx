import api from 'api/api';
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

    console.log(response.data);

    localStorage.setItem('@BYT:token', token);
    localStorage.setItem('@BYT:user', JSON.stringify(user));

    setData({ user, token });
  }, []);

  const signOut = useCallback(async () => {
    localStorage.removeItem('@BYT:token');
    localStorage.removeItem('@BYT:user');

    setData({} as IUserData);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('@BYT:token') || '';
    const user = localStorage.getItem('@BYT:user') || '';

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
