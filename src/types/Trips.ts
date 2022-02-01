export interface ITrips {
  id: string;
  name: string;
  subtitle: string;
  thumb: string;
  description: string;
  user: {
    name: string;
    avatar: string;
  };
}
