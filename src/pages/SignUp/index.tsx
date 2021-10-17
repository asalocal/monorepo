import { Container, Content, Background, ContentWrapper } from './styles';

import logo from '../../assets/logo.svg';
import Input from 'components/Input';
import Button from 'components/Button';
import Checkbox from 'components/Checkbox';

function SignUp() {
  return (
    <Container>
      <Content>
        <ContentWrapper>
          <img src={logo} alt="Build your trip" />
          <Input type="text" placeholder="Full Name" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Senha" />
          <Button>Sign Up</Button>
          <Checkbox>I accept the terms of use</Checkbox>
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
