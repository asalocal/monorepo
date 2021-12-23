import nookies from 'nookies';

export function getUserFromCookies() {
  const cookies = nookies.get(null);

  if (cookies && cookies.user) {
    return JSON.parse(cookies.user);
  }

  return null;
}
