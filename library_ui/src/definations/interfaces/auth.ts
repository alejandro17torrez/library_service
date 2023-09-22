import { Book } from "./book";
import { UserInterface } from "./user";

export enum Auth {
  USER = 'user',
  LOGIN = 'login',
  LOGOUT = 'logout',
}

export interface AuthPayload {
  username: string;
  password: string;
}


export interface AuthReducer {
  state: State;
  action: Action;
}

export interface SignIn {
    refresh: string;
    access: string;
    user: UserInterface;
}

export interface State {
  // rome-ignore lint: Unexpected any. Specify a different type.
  token: SignIn | any;
}

export interface Action {
  type: Auth,
  payload?: State;
}

export interface IAuthContext {
  state: State,
  dispatch: (action: Action) => void,
}

export interface BearerTokenInterface {
  id?: string;
  token?: string;
  book?: Book;
}
