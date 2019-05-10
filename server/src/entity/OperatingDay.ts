export class OperatingDay {
  id: string;
  dayOfWeek: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  startsAt: string;
  endsAt: string;
  isEnabled: boolean = true;
}
