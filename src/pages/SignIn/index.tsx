import { Container, Content, Background, ContentWrapper } from './styles';

import logo from '../../assets/logo.svg';
import Input from 'components/Input';
import Button from 'components/Button';

function SignIn() {
  return (
    <Container>
      <Content>
        <ContentWrapper>
          <img src={logo} alt="Build your trip" />
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Senha" />
          <Button>Entrar</Button>
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
