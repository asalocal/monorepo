export interface ITrips {
  id: string;
  name: string;
  subtitle: string;
  thumbs: string[];
  description: string;
  user: {
    name: string;
    avatar: string;
  };
}
