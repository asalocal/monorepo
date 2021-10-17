import { useEffect, useState } from 'react';
import { verifyPasswordStrenght } from 'utils/verifyPasswordStrenght';
import {
  HighPassword,
  MediumPassword,
  StrongPassword,
  WeakPassword,
  Container,
  PasswordMessage,
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
    console.log(verifyStrength);
    console.log(password);
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
        <PasswordMessage>Your password is {strength.strength}</PasswordMessage>
      )}
    </>
  );
}

export default StrenghtPassword;
