import Button from 'components/Button';
import Form from 'components/Form';
import Input from 'components/Input';
import Select from 'components/Select';
import Option from 'components/Select/Option';

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

function Test() {
  return (
    <>
      <Form doSubmit={(data) => console.log(data)}>
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

        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
    </>
  );
}

export default Test;
