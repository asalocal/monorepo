import { DiscoverContentContainer, InputContainer } from './styles';
import Input from 'components/Input';
import Button from 'components/Button';
import Form from 'components/Form';

function DiscoverContent() {
  return (
    <DiscoverContentContainer>
      <h5>Discover your trip</h5>
      <span>
        Dont know where to go?{' '}
        <b>Begin your search with a city of your interest</b>
      </span>

      <Form onSubmit={(data) => console.log(data)}>
        <InputContainer>
          <Input type="text" name="searchCity" label="Search for a city" />
          <Button>Search</Button>
        </InputContainer>
      </Form>
    </DiscoverContentContainer>
  );
}

export default DiscoverContent;
