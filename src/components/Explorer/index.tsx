import { RocketIcon } from '@modulz/radix-icons';
import Select from 'components/Select';
import { useState } from 'react';
import { BiBuildingHouse } from 'react-icons/bi';
import {
  ButtonContainer,
  ContentContainer,
  DiscoverButton,
  ExplorerButton,
  ExplorerContainer,
  ExplorerWrapper,
  TripOptionsContainer,
} from './styles';

const tripOptions = [
  { value: 1, label: 'One way' },
  { value: 2, label: 'Two way' },
];

const passengersOptions = [
  { value: 1, label: 'One passanger' },
  { value: 2, label: 'Two passangers' },
  { value: 3, label: 'Three passangers' },
];

function Explorer() {
  const [wrapperContent, setWrapperContent] = useState(0);

  return (
    <ExplorerContainer>
      <ButtonContainer>
        <ExplorerButton
          selected={wrapperContent === 0}
          onClick={() => setWrapperContent(0)}
        >
          <RocketIcon /> Explore
        </ExplorerButton>
        <DiscoverButton
          selected={wrapperContent === 1}
          onClick={() => setWrapperContent(1)}
        >
          <BiBuildingHouse /> Discover
        </DiscoverButton>
      </ButtonContainer>
      <ExplorerWrapper>
        <ContentContainer selected={wrapperContent === 0}>
          <TripOptionsContainer>
            <Select options={tripOptions} />
            <Select options={passengersOptions} />
          </TripOptionsContainer>
        </ContentContainer>
        <ContentContainer selected={wrapperContent === 1}>
          <h1>Teste 2</h1>
        </ContentContainer>
      </ExplorerWrapper>
    </ExplorerContainer>
  );
}

export default Explorer;
