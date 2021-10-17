export function verifyPasswordStrenght(password: string): {
  strength: 'weak' | 'medium' | 'high' | 'strong' | 'none';
} {
  const regexMediumPassword =
    /(?=.*[a-zA-Z])(?=.*[0-9])(?=.{6,})|(?=.*[a-zA-Z])(?=.*[@!#$])(?=.{6,})|(?=.*[0-9])(?=.*[@!#$])(?=.{6,})|(?=.*[a-zA-Z])(?=.[a-zA-Z])(?=.{6,})/g;
  const regexHighPassword =
    /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})|(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[@!#$%])(?=.{6,})/g;
  const regexStrongestPassword =
    /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.*[@!$%])(?=.{6,})/g;

  if (regexStrongestPassword.test(password)) {
    return {
      strength: 'strong',
    };
  } else if (regexHighPassword.test(password)) {
    return {
      strength: 'high',
    };
  } else if (regexMediumPassword.test(password)) {
    return {
      strength: 'medium',
    };
  } else if (password.length > 0) {
    return {
      strength: 'weak',
    };
  }
  return {
    strength: 'none',
  };
}
