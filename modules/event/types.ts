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
  country: string;
};

export type Event = {
  id: string;
  title: string;
  description: string;
  eventUrl: string;
  dateTime: string;
  featuredEventPhoto?: {
    highResUrl: string;
  };
  rsvps: {
    yesCount: number;
  };
  group: {
    id: string;
  };
  venues: Venue[] | Venue;
  photoAlbum?: {
    photoSample: PhotoSample[];
  };
  sponsor?: Sponsor;
  talks?: Array<Talk>;
};
