import { Form } from '@unform/web';
import Button from 'components/Button';
import Input from 'components/Input';
import { useAuth } from 'context/AuthContext';
import { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { Container, Content, ContentWrapper } from './styles';

function SignIn() {
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const { push } = useHistory();

  const handleSubmit = useCallback(
    async (data) => {
      setLoading(true);

      await signIn(data);

      push('/');
      setLoading(false);
    },
    [signIn, push]
  );

  return (
    <Container>
      <Content>
        <ContentWrapper>
          <img src={logo} alt="Build your trip" />
          <Form onSubmit={handleSubmit}>
            <Input type="email" name="email" id="email" placeholder="Email" />
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <Button loading={loading} type="submit">
              Sign In
            </Button>
          </Form>
          <span>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </span>
        </ContentWrapper>
      </Content>
    </Container>
  );
}

export default SignIn;
