export interface ISignUpPayload {
  fullName: string;
  email: string;
  password: string;
}

export interface ISignInPayload {
  email: string;
  password: string;
}