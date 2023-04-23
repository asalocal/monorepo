import { User } from 'next-auth';
import { Provider } from 'next-auth/providers';

export default function BuildYourTrip(
  authorize: (credentials: any) => Promise<any | null>
): Provider {
  return {
    id: 'default',
    name: 'Default',
    type: 'credentials',
    credentials: {
      email: {
        label: 'Email',
        type: 'email',
        placeholder: 'Email',
      },
      password: {
        label: 'Password',
        type: 'password',
      },
    },

    authorize,
  };
}
