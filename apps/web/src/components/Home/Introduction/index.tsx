import Explorer from 'components/Explorer';
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
        <TitleContainer>
          <Text as="h1" css={{ color: '$text' }}>
            Your <strong>fulfilled dream</strong> <br />
            is 2 clicks away.
          </Text>
          <h5>
            Find the place that you wanna go, build your trip and have fun
          </h5>
        </TitleContainer>
        <Explorer />
      </IntroductionContent>
    </IntroductionContainer>
  );
}

export default Introduction;
