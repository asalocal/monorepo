import { DiscoverContentContainer, InputContainer } from './styles';
import Input from 'components/Input';
import { Form } from '@unform/web';
import Button from 'components/Button';

function DiscoverContent() {
  return (
    <DiscoverContentContainer>
      <h5>Discover your trip</h5>
      <span>
        Don't know where to go?{' '}
        <b>Begin your search with a city of your interest</b>
      </span>

      <Form onSubmit={(data) => console.log(data)}>
        <InputContainer>
          <Input
            type="text"
            name="searchCity"
            placeholder="Search for a city"
          />
          <Button>Search</Button>
        </InputContainer>
      </Form>
    </DiscoverContentContainer>
  );
}

export default DiscoverContent;
