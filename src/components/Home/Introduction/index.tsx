import Explorer from 'components/Explorer';
import Navbar from 'components/Navbar';

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
