import {
  RocketIcon,
  MagnifyingGlassIcon,
  WidthIcon,
} from '@modulz/radix-icons';
import { useCallback, useRef, useState } from 'react';
import * as yup from 'yup';
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
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import Input from 'components/Input';

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

interface ExploreFormData {
  leavingFrom: string;
  goingTo: string;
  departure: string;
  dateOfReturn: string;
  numberOfKids: string;
  numberOfPassengers: string;
}

function Explorer() {
  const [wrapperContent, setWrapperContent] = useState(0);

  const formRef = useRef<FormHandles>(null);

  const handleInputChange = useCallback(() => {
    formRef.current?.setErrors({});
  }, []);

  const handleExploreSubmit = useCallback(
    ({
      leavingFrom,
      departure,
      goingTo,
      numberOfKids,
      numberOfPassengers,
      dateOfReturn,
    }: ExploreFormData) => {
      if (!leavingFrom || !departure || !goingTo || !dateOfReturn) {
        formRef.current?.setErrors({
          leavingFrom: 'Please fill in the leaving from field',
          departure: 'Please fill in the departure field',
          goingTo: 'Please fill in the going to field',
          dateOfReturn: 'Please fill in the date of return field',
        });
        return;
      }

      const url = `/explore?leavingFrom=${leavingFrom}&departure=${departure}&goingTo=${goingTo}&numberOfKids=${numberOfKids}&numberOfPassengers=${numberOfPassengers}&dateOfReturn=${dateOfReturn}`;

      window.location.href = url;
    },
    [formRef]
  );

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
            <Form ref={formRef} onSubmit={handleExploreSubmit}>
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
                <Input
                  type="text"
                  label="Leaving from"
                  name="leavingFrom"
                  onChange={handleInputChange}
                  id="leavingFrom"
                />
                <WidthIcon width="120px" />
                <Input
                  type="text"
                  onChange={handleInputChange}
                  label="Going to"
                  name="goingTo"
                  id="goingTo"
                />
                <Input
                  type="text"
                  onChange={handleInputChange}
                  label="Departure"
                  name="departure"
                  id="departure"
                />

                <WidthIcon width="120px" />

                <Input
                  type="text"
                  label="Return"
                  name="dateOfReturn"
                  id="dateOfReturn"
                />
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
