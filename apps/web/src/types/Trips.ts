export interface IUserTripData {
  name: string;
  rank?: string;
  avatar: string;
  bio?: string;
  followers: number;
  following: number;
  trips: number;
}
export interface ITrips {
  id: string;
  name: string;
  subtitle: string;
  thumbs: string[];
  description: string;
  user: IUserTripData;
}
