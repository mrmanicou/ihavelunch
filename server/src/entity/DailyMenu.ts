import { Eatery } from './Eatery';
import { DailyMenuItem } from './DailyMenuItem';

export class DailyMenu {
  id: string;
  eatery: Eatery;
  items: DailyMenuItem[];
}
