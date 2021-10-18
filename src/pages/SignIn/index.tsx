import { Form } from '@unform/web';
import Button from 'components/Button';
import Input from 'components/Input';
import { useCallback } from 'react';
import logo from '../../assets/logo.svg';
import { Background, Container, Content, ContentWrapper } from './styles';

function SignIn() {
  const handleSubmit = useCallback((data) => {
    console.log(data);
  }, []);

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
            <Button type="submit">Sign In</Button>
          </Form>
          <span>
            Don't have an account? <a href="#signup">Sign up</a>
          </span>
        </ContentWrapper>
      </Content>
      <Background />
    </Container>
  );
}

export default SignIn;
