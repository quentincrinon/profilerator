export type ProfileName = {
  title: string;
  first: string;
  last: string;
};

export type ProfileLocation = {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: {
    latitude: string;
    longiture: string;
  };
  timezone: {
    offset: string;
    description: string;
  };
};

export type Profile = {
  id: {
    name: string;
    value: string;
  };
  name: ProfileName;
  location: ProfileLocation;
  phone: string;
  nat: string;
};
