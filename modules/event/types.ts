export type Sponsor = {
  name: string;
  logo: string;
  url: string;
};

export type Speaker = {
  name: string;
  socialLink?: string;
};

export type Talk = {
  title: string;
  speakers: Array<Speaker>;
  videoLink?: string;
};

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
  sponsor?: Sponsor;
  talks?: Array<Talk>;
};
