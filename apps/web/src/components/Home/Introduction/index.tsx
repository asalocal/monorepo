import Explorer from 'components/Explorer';
import Text from 'components/Text';
import useTranslations from 'hooks/useTranslations';

import {
  IntroductionContainer,
  TitleContainer,
  IntroductionContent,
} from './styles';

function Introduction() {
  const { translate } = useTranslations();

  return (
    <IntroductionContainer>
      <IntroductionContent>
        <TitleContainer>
          <Text as="h1" css={{ color: '$text' }}>
            {translate('fulfilled.dream')}
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
