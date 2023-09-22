export interface UserInterface {
  username: string;
  password: string;
}

export interface SignUpInterface {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  isSuperuser: boolean;
  isStaff: boolean;
}
