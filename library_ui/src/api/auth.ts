import { AuthPayload } from "../definations/interfaces/auth";
import fetcWithoutToken from "./fetch";
import { SIGININ, SIGNUP } from "../definations/endpoints/auth";
import { Methods } from "../definations/interfaces/fetch";
import { fetchWithToken } from "./fetch";
import { SignUpInterface } from "../definations/interfaces/user";

export const getAuthToken = async ({ username, password }: AuthPayload) => {
  return await fetcWithoutToken({
    url: SIGININ,
    params: {},
    method: Methods.POST,
    data: {
      'username': username,
      'password': password,
  }})
};


export const createUser = async ({
  username,
  email,
  firstName,
  lastName,
  password,
  isStaff=false,
  isSuperuser=false,
}: SignUpInterface) => {

  return await fetchWithToken({
    url: SIGNUP,
    params: {},
    method: Methods.POST,
    data: {
      "username": username,
      "email": email,
      "first_name": firstName,
      "last_name": lastName,
      "password": password,
      "is_staff": isStaff,
      "is_superuser": isSuperuser,
    },
  });
}
