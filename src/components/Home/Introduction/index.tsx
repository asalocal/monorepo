import Explorer from 'components/Explorer';
import Navbar from 'components/Navbar';
import Text from 'components/Text';

import {
  IntroductionContainer,
  TitleContainer,
  IntroductionContent,
} from './styles';

function Introduction() {
  return (
    <IntroductionContainer>
      <IntroductionContent>
        <Navbar orientation="horizontal" backgroundColor="transparent" />
        <TitleContainer>
          <Text as="h1" css={{ color: '$text' }}>
            It’s your time to build <br />
            <strong>your dreams</strong>
          </Text>
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
