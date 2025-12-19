import { IUser } from './user.interface';

export interface JwtPayload {
  sub: string;
  email: string;
  fullName: string;
}

export interface IRequestWithUser extends Request {
  user: IUser;
}
