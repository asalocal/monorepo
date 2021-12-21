import { RocketIcon, MagnifyingGlassIcon } from '@modulz/radix-icons';
import { useState } from 'react';
import { Form } from '@unform/web';

import ExploreForm from './ExploreForm';
import Button from 'components/Button';
import Select from 'components/Select';
import Option from 'components/Select/Option';
import { BiBuildingHouse } from 'react-icons/bi';
import {
  ContentContainer,
  DiscoverButton,
  ExplorerButton,
  ExplorerContainer,
  ExplorerWrapper,
  InputContainers,
  TripOptionsContainer,
} from './styles';
import DiscoverContent from './DiscoverContent';
import Flex from 'components/Flex';

const passengersOptions = [
  { value: 'One passanger', label: 'One passanger' },
  { value: 'Two Passangers', label: 'Two passangers' },
  { value: 'Three Passangers', label: 'Three passangers' },
];

const kidsOptions = [
  { value: 'No kids', label: 'No kids' },
  { value: 'One kid', label: 'One kid' },
  { value: 'More than 2 kids', label: 'More than 2 kids' },
];

function Explorer() {
  const [wrapperContent, setWrapperContent] = useState(0);

  return (
    <ExplorerContainer>
      <Flex>
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
      </Flex>
      <ExplorerWrapper>
        <ContentContainer selected={wrapperContent === 0}>
          <Flex css={{ padding: '20px' }}>
            <Form onSubmit={(data) => console.log(data)}>
              <TripOptionsContainer>
                <Select name="numberOfPassengers">
                  {passengersOptions.map((option) => (
                    <Option key={option.value} value={option.value}>
                      {option.label}
                    </Option>
                  ))}
                </Select>

                <Select name="numberOfKids">
                  {kidsOptions.map((option) => (
                    <Option key={option.value} value={option.value}>
                      {option.label}
                    </Option>
                  ))}
                </Select>
              </TripOptionsContainer>
              <InputContainers>
                <ExploreForm />
                <Button variant="primary" type="submit">
                  <MagnifyingGlassIcon /> Search
                </Button>
              </InputContainers>
            </Form>
          </Flex>
        </ContentContainer>
        <ContentContainer selected={wrapperContent === 1}>
          <DiscoverContent />
        </ContentContainer>
      </ExplorerWrapper>
    </ExplorerContainer>
  );
}

export default Explorer;
