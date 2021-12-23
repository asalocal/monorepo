import { WidthIcon } from '@modulz/radix-icons';
import Input from 'components/Input';

function ExploreForm() {
  return (
    <>
      <Input
        type="text"
        label="Leaving from"
        name="leavingFrom"
        id="leavingFrom"
      />
      <WidthIcon width="120px" />
      <Input type="text" label="Going to" name="goingTo" id="goingTo" />
      <Input type="text" label="Departure" name="departure" id="departure" />

      <WidthIcon width="120px" />

      <Input type="text" label="Return" name="return" id="return" />
    </>
  );
}

export default ExploreForm;
