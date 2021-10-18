import { Container, Content, Background, ContentWrapper } from './styles';

import logo from '../../assets/logo.svg';
import Input from 'components/Input';
import Button from 'components/Button';
import Checkbox from 'components/Checkbox';
import { Form } from '@unform/web';

function SignUp() {
  return (
    <Container>
      <Content>
        <ContentWrapper>
          <img src={logo} alt="Build your trip" />
          <Form onSubmit={() => console.log('submit')}>
            <Input name="fullname" type="text" placeholder="Full Name" />
            <Input name="email" type="email" placeholder="Email" />
            <Input
              name="password"
              type="password"
              verifyPassword
              placeholder="Senha"
            />
            <Button>Sign Up</Button>
            <Checkbox>I accept the terms of use</Checkbox>
          </Form>
          <span>
            Have an account? <a href="#signup">Sign In</a>
          </span>
        </ContentWrapper>
      </Content>
      <Background />
    </Container>
  );
}

export default SignUp;
