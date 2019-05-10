import { Parish } from './Parish';
import { OperatingDay } from './OperatingDay';
import { User } from './User';
import { EateryPhoto } from './EateryPhoto';

export class Eatery {
  id: string;

  // General info
  name: string;
  description: string;
  contactNumber?: string;
  contacts: User[];

  // Location info
  lat?: number;
  lon?: number;
  address?: string;
  parish?: Parish;

  // General Availability
  operatingDays: OperatingDay[];

  // Social
  photos: EateryPhoto[];
  faceBook?: string;
  instagram?: string;
  whatsApp?: string;
}
