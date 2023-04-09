import { MagnifyingGlassIcon } from '@modulz/radix-icons';
import { useCallback, useRef, useState } from 'react';
import Button from 'components/Button';
import {
  ContentContainer,
  ExplorerContainer,
  ExplorerWrapper,
  InputContainers,
} from './styles';
import Flex from 'components/Flex';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import DateInput from 'components/DateInput';
import InputAutocomplete, {
  AutocompleteOption,
} from 'components/InputAutocomplete';
import searchOptions from 'mocks/searchOptions';
import { FiMapPin } from 'react-icons/fi';
import Text from 'components/Text';

interface ExploreFormData {
  itinerary: string;
  departure: string;
  dateOfReturn: string;
}

function Explorer() {
  const [departureValue, setDepartureValue] = useState('');
  const formRef = useRef<FormHandles>(null);

  const handleInputChange = useCallback(() => {
    formRef.current?.setErrors({});
  }, []);

  const handleDepartureValue = useCallback((value) => {
    setDepartureValue(value);
  }, []);

  const handleExploreSubmit = useCallback(
    ({ itinerary, departure, dateOfReturn }: ExploreFormData) => {
      const url = `/explore?leavingFrom=${itinerary}&departure=${departure}&dateOfReturn=${dateOfReturn}`;

      console.log({
        itinerary,
        departure,
        dateOfReturn,
      });
    },
    [formRef]
  );

  return (
    <ExplorerContainer>
      <ExplorerWrapper>
        <ContentContainer>
          <Flex alignItems="center">
            <Form ref={formRef} onSubmit={handleExploreSubmit}>
              <InputContainers>
                <InputAutocomplete
                  type="text"
                  label="Itinerary"
                  name="itinerary"
                  onChange={handleInputChange}
                  id="itinerary"
                >
                  {searchOptions.map((option) => (
                    <AutocompleteOption
                      key={option.value}
                      css={{
                        width: '200px',
                      }}
                      value={option.value}
                    >
                      <Flex
                        alignItems="center"
                        direction="row"
                        css={{
                          padding: '10px',
                          borderBottom: '1px solid $primary',
                          width: '100%',
                          h6: {
                            fontSize: '15px',
                            fontWeight: '500',
                          },

                          p: {
                            color: '$textAlternative',
                            width: 'fit-content',
                          },

                          svg: {
                            marginRight: '10px',
                            color: '$primary',
                            fontSize: '24px',
                          },
                        }}
                      >
                        <FiMapPin />{' '}
                        <Flex direction="column">
                          <Text as="h6">{option.value}</Text>
                          <Text as="p">{option.value}</Text>
                        </Flex>
                      </Flex>
                    </AutocompleteOption>
                  ))}
                </InputAutocomplete>

                <DateInput
                  onChange={(ev) => {
                    handleInputChange();
                    setDepartureValue(ev.target.value);
                  }}
                  label="Departure"
                  name="departure"
                  onDateChange={handleDepartureValue}
                  id="departure"
                />

                <DateInput
                  type="text"
                  onChange={handleInputChange}
                  validationDate={departureValue}
                  label="Return"
                  name="dateOfReturn"
                  id="dateOfReturn"
                />
                <Button
                  css={{ maxWidth: '150px' }}
                  variant="primary"
                  type="submit"
                >
                  <MagnifyingGlassIcon /> Search
                </Button>
              </InputContainers>
            </Form>
          </Flex>
        </ContentContainer>
      </ExplorerWrapper>
    </ExplorerContainer>
  );
}

export default Explorer;
