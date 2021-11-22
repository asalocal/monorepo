import { WidthIcon } from '@modulz/radix-icons';
import Input from 'components/Input';

function ExploreForm() {
  return (
    <>
      <Input
        type="text"
        placeholder="Leaving from"
        name="leavingFrom"
        id="leavingFrom"
      />
      <WidthIcon width="120px" />
      <Input type="text" placeholder="Going to" name="goingTo" id="goingTo" />
      <Input
        type="text"
        placeholder="Departure"
        name="departure"
        id="departure"
      />

      <WidthIcon width="120px" />

      <Input type="text" placeholder="Return" name="return" id="return" />
    </>
  );
}

export default ExploreForm;
