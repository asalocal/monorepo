import { useEffect, useState } from 'react';
import { verifyPasswordStrenght } from 'utils/verifyPasswordStrenght';
import {
  HighPassword,
  MediumPassword,
  StrongPassword,
  WeakPassword,
  Container,
  PasswordMessage,
  MessageContainer,
} from './styles';

interface IStrenghtPassword {
  strength: 'weak' | 'medium' | 'high' | 'strong' | 'none';
}

interface StrenghtPasswordProps {
  password: string;
}

function StrenghtPassword({ password }: StrenghtPasswordProps) {
  const [strength, setStrength] = useState<IStrenghtPassword>({
    strength: 'none',
  });

  useEffect(() => {
    const verifyStrength = verifyPasswordStrenght(password);
    setStrength(verifyStrength);
  }, [password]);

  return (
    <>
      <Container>
        <WeakPassword strength={strength.strength} />
        <MediumPassword strength={strength.strength} />
        <HighPassword strength={strength.strength} />
        <StrongPassword strength={strength.strength} />
      </Container>
      {strength.strength !== 'none' && (
        <MessageContainer>
          <PasswordMessage>
            Your password is {strength.strength}
          </PasswordMessage>
        </MessageContainer>
      )}
    </>
  );
}

export default StrenghtPassword;
