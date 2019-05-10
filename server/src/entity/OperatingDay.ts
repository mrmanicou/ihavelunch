import { Eatery } from './Eatery';
import { ManyToOne } from 'typeorm';

export class OperatingDay {
  id: string;
  dayOfWeek: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  startsAt: string;
  endsAt: string;
  isEnabled: boolean = true;

  @ManyToOne(_ => Eatery, eatery => eatery.operatingDays)
  eatery: Eatery;
}
