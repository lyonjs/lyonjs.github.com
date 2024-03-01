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

export type PhotoSample = {
  source: string;
};

export type Venue = {
  name: string;
  address: string;
  city: string;
  postalCode: string;
  lat: string;
  lng: string;
};

export type Event = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  eventUrl: string;
  dateTime: string;
  imageUrl: string;
  going: number;
  group: {
    id: string;
  };
  venue?: Venue;
  photoAlbum?: {
    photoSample: PhotoSample[];
  };
  sponsor?: Sponsor;
  talks?: Array<Talk>;
};
