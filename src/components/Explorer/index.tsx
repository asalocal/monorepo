import { RocketIcon, MagnifyingGlassIcon } from '@modulz/radix-icons';

import { Form } from '@unform/web';
import ExploreForm from './ExploreForm';
import Button from 'components/Button';
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
  InputContainers,
  TripOptionsContainer,
} from './styles';
import DiscoverContent from './DiscoverContent';

const tripOptions = [
  { value: 1, label: 'One way' },
  { value: 2, label: 'Two way' },
];

const passengersOptions = [
  { value: 1, label: 'One passanger' },
  { value: 2, label: 'Two passangers' },
  { value: 3, label: 'Three passangers' },
];

const kidsOptions = [
  { value: 1, label: 'No kids' },
  { value: 2, label: 'One kid' },
  { value: 3, label: 'More than 2 kids' },
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
          <Form onSubmit={(data) => console.log(data)}>
            <TripOptionsContainer>
              <Select name="tripOptions" options={tripOptions} />

              <Select name="numberOfPassengers" options={passengersOptions} />

              <Select name="haveKids" options={kidsOptions} />
            </TripOptionsContainer>
            <InputContainers>
              <ExploreForm />
              <Button variant="primary" type="submit">
                <MagnifyingGlassIcon /> Search
              </Button>
            </InputContainers>
          </Form>
        </ContentContainer>
        <ContentContainer selected={wrapperContent === 1}>
          <DiscoverContent />
        </ContentContainer>
      </ExplorerWrapper>
    </ExplorerContainer>
  );
}

export default Explorer;
