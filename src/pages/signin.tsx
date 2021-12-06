import { Form } from '@unform/web';
import { useRouter } from 'next/router';
import Button from 'components/Button';
import Input from 'components/Input';
import { useAuth } from 'context/AuthContext';
import { useCallback, useState } from 'react';
import { Container, Content, ContentWrapper } from '../styles/SignIn.styles';

function SignIn() {
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const { push } = useRouter();
  const handleSubmit = useCallback(
    async (data) => {
      setLoading(true);

      await signIn(data);
      setLoading(false);
      push('/', 'href');
    },
    [signIn, push]
  );

  return (
    <Container>
      <Content>
        <ContentWrapper>
          <img src="/assets/logo.svg" alt="Build your trip" />
          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              name="email"
              theme="light"
              id="email"
              placeholder="Email"
            />
            <Input
              type="password"
              theme="light"
              name="password"
              id="password"
              placeholder="Password"
            />
            <Button variant="secondary" loading={loading} type="submit">
              Sign In
            </Button>
          </Form>
          <span>
            Don't have an account? <a href="/signup">Sign up</a>
          </span>
        </ContentWrapper>
      </Content>
    </Container>
  );
}

export default SignIn;
