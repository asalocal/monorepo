import Explorer from 'components/Explorer';
import Navbar, { NavbarItems } from 'components/Navbar';
import { useEffect, useState } from 'react';

import {
  IntroductionContainer,
  TitleContainer,
  IntroductionContent,
} from './styles';

const items: NavbarItems[] = [
  {
    to: '/',
    label: 'Home',
    type: 'link',
  },
  {
    to: '/beaguide',
    label: 'Be a guide',
    type: 'link',
  },
  {
    to: '/support',
    label: 'Support',
    type: 'link',
  },
  {
    to: '/faq',
    label: 'FAQ',
    type: 'link',
  },
  {
    to: '/signup',
    label: 'Sign up',
    type: 'button',
  },
];

function Introduction() {
  const [navItems, setNavItems] = useState<NavbarItems[]>(items);

  useEffect(() => {
    setNavItems(items);
  }, []);
  return (
    <IntroductionContainer>
      <IntroductionContent>
        <Navbar
          orientation="horizontal"
          backgroundColor="transparent"
          items={navItems}
        />
        <TitleContainer>
          <h1>
            It’s your time to build <br />
            <strong>your dreams</strong>
          </h1>
          <h5>
            We give you the possibility to build your dream in a few minutes
          </h5>
        </TitleContainer>
        <Explorer />
      </IntroductionContent>
    </IntroductionContainer>
  );
}

export default Introduction;
