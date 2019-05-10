import { Photo } from './Photo';
import { Eatery } from './Eatery';
import { ManyToOne } from 'typeorm';

export class EateryPhoto {
  @ManyToOne(_ => Eatery, eatery => eatery.photos)
  eatery: Eatery;
  photo: Photo;
}
