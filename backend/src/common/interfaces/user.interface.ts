export interface IUser {
  id: number;
  email: string;
  fullName: string;
}

export interface ILoginResponse {
  access_token: string;
  user: IUser;
}

export interface ICustomResponse {
  status: (code: number) => ICustomResponse;
  json: (body: unknown) => void;
}

export interface ICustomRequest {
  url: string;
}
