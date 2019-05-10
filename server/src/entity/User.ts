import { UserType } from './UserType';

export class User {
  id: string;
  name: string;
  userType: UserType = UserType.WEB;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
