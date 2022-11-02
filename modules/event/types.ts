export type Event = {
  title: string;
  shortDescription: string;
  description: string;
  eventUrl: string;
  dateTime: string;
  imageUrl: string;
  venue: {
    name: string;
    address: string;
    city: string;
    postalCode: string;
    lat: string;
    lng: string;
  };
};
