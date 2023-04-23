import { trips } from './trips';

const searchOptions = trips.map((trip) => ({
  value: trip.name,
}));

export default searchOptions;
