export interface Attraction {
  name: string;
  distance: string;
  type: string;
  image: string;
}

export interface Location {
  name: string;
  address: string;
  coordinates: { lat: number; lng: number };
  phone: string;
  email: string;
  openingHours: string;
  nearbyAttractions: Attraction[];
}
