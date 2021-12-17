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

interface StrenghtPasswordProps {
  password: string;
}

function StrenghtPassword({ password }: StrenghtPasswordProps) {
  const [strength, setStrength] = useState<
    'weak' | 'medium' | 'high' | 'strong' | 'none'
  >('none');

  useEffect(() => {
    const verifyStrength = verifyPasswordStrenght(password);
    setStrength(verifyStrength.strength);
  }, [password]);

  return (
    <>
      <Container>
        <WeakPassword className="strength-container" strength={strength} />
        <MediumPassword className="strength-container" strength={strength} />
        <HighPassword className="strength-container" strength={strength} />
        <StrongPassword className="strength-container" strength={strength} />
        <MessageContainer
          data-state={
            strength !==
            ('none' as 'weak' | 'medium' | 'high' | 'strong' | 'none')
              ? 'active'
              : 'inactive'
          }
        >
          <PasswordMessage>{strength}</PasswordMessage>
        </MessageContainer>
      </Container>
    </>
  );
}

export default StrenghtPassword;
