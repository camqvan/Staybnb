import { IconType } from 'react-icons';
import { MdCabin } from 'react-icons/md';

import { TbCaravan, TbTent, TbBuildingCottage } from 'react-icons/tb';

import { GiWoodCabin, GiMushroomHouse } from 'react-icons/gi';
import { PiWarehouse, PiLighthouse, PiVan } from 'react-icons/pi';

import { GoContainer } from 'react-icons/go';

type Category = {
  label: CategoryLabel;
  icon: IconType;
};

export type CategoryLabel =
  | 'Cabins'
  | 'Design'
  | 'Play'
  | 'Domes'
  | 'Containers'
  | 'Campers'
  | 'Towers'
  | 'OMG!'
  | 'Camping'
  | 'Countryside';

export const categories: Category[] = [
  {
    label: 'Cabins',
    icon: MdCabin,
  },
  {
    label: 'Design',
    icon: PiWarehouse,
  },
  {
    label: 'Camping',
    icon: TbTent,
  },
  {
    label: 'Play',
    icon: TbCaravan,
  },
  {
    label: 'Domes',
    icon: TbBuildingCottage,
  },
  {
    label: 'OMG!',
    icon: GiMushroomHouse,
  },
  {
    label: 'Containers',
    icon: GoContainer,
  },
  {
    label: 'Campers',
    icon: PiVan,
  },

  {
    label: 'Towers',
    icon: PiLighthouse,
  },
  {
    label: 'Countryside',
    icon: GiWoodCabin,
  },
];
