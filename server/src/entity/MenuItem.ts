import { Photo } from './Photo';
import { Eatery } from './Eatery';

export class MenuItem {
  id: string;
  name: string;
  regularPrice: number;
  owner: Eatery;
  photo?: Photo;

  createdAt: Date;
  updatedAt: Date;
}
