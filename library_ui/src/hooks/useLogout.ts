import { Auth } from "../definations/interfaces/auth";
import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    sessionStorage.removeItem(Auth.USER);
    dispatch({ type: Auth.LOGOUT });
    window.location.href = "/";
  };

  return { logout };
}
