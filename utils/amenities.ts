import { IconType } from 'react-icons';
export type Amenity = {
  name: string;
  icon: IconType;
  selected: boolean;
};
import {
  FiCloud,
  FiTruck,
  FiZap,
  FiWind,
  FiSun,
  FiCoffee,
  FiFeather,
  FiAirplay,
  FiTrello,
  FiBox,
  FiAnchor,
  FiDroplet,
  FiMapPin,
  FiSunrise,
  FiSunset,
  FiMusic,
  FiHeadphones,
  FiRadio,
  FiFilm,
  FiTv,
} from 'react-icons/fi';

export const amenities: Amenity[] = [
  { name: 'Essentials', icon: FiCloud, selected: false },
  { name: 'Free parking', icon: FiTruck, selected: false },
  { name: 'EV charger', icon: FiZap, selected: false },
  {
    name: 'Hair dryer',
    icon: FiWind,
    selected: false,
  },
  { name: 'outdoor furniture', icon: FiSun, selected: false },
  { name: 'Coffee', icon: FiCoffee, selected: false },
  { name: 'Patio or balcony', icon: FiFeather, selected: false },
  { name: 'Ethernet connection', icon: FiAirplay, selected: false },
  { name: 'Mini fridge', icon: FiTrello, selected: false },
  {
    name: 'Toaster',
    icon: FiBox,
    selected: false,
  },
  { name: 'Smoke alarm', icon: FiAnchor, selected: false },
  { name: 'Shower gel', icon: FiDroplet, selected: false },
  {
    name: 'Beach access',
    icon: FiMapPin,
    selected: false,
  },
  { name: 'BBQ grill', icon: FiSunrise, selected: false },
  { name: 'Central heating', icon: FiSunset, selected: false },
  { name: 'Bluetooth sound system', icon: FiMusic, selected: false },
  {
    name: 'Private entrance',
    icon: FiHeadphones,
    selected: false,
  },
  { name: 'Wifi', icon: FiRadio, selected: false },
  { name: 'Home theater', icon: FiFilm, selected: false },
  { name: 'TV', icon: FiTv, selected: false },
];

export const conservativeAmenities: Amenity[] = [
  { name: 'cloud storage', icon: FiCloud, selected: false },
  { name: 'parking', icon: FiTruck, selected: false },
  { name: 'fire pit', icon: FiZap, selected: false },
  { name: 'bbq grill', icon: FiWind, selected: false },
  { name: 'outdoor furniture', icon: FiSun, selected: false },
  { name: 'private bathroom', icon: FiCoffee, selected: false },
  { name: 'hot shower', icon: FiFeather, selected: false },
  { name: 'kitchenette', icon: FiAirplay, selected: false },
  { name: 'heating', icon: FiTrello, selected: false },
  { name: 'air conditioning', icon: FiBox, selected: false },
  { name: 'bed linens', icon: FiAnchor, selected: false },
  { name: 'towels', icon: FiDroplet, selected: false },
  { name: 'picnic table', icon: FiMapPin, selected: false },
  { name: 'hammock', icon: FiSunrise, selected: false },
  { name: 'solar power', icon: FiSunset, selected: false },
  { name: 'water supply', icon: FiMusic, selected: false },
  { name: 'cooking utensils', icon: FiHeadphones, selected: false },
  { name: 'cool box', icon: FiRadio, selected: false },
  { name: 'lanterns', icon: FiFilm, selected: false },
  { name: 'first aid kit', icon: FiTv, selected: false },
];
