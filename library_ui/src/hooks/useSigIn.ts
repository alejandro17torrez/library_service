import { Auth, AuthPayload } from "../definations/interfaces/auth";
import { getAuthToken } from "../api/auth";
import { useState } from "react"
import { useAuthContext } from "./useAuthContext";

export const useSignIn = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signIn = async ({ username, password }: AuthPayload) => {
    setIsLoading(true);
    setError(null);

    const response: Response = await getAuthToken({
      username: username, password: password
    });

    const token = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(token.error)
    };
    if (response.ok) {
      // save the user in local storage
      sessionStorage.setItem(Auth.USER, JSON.stringify(token));
      // update the AuthContext
      dispatch({ type: Auth.LOGIN, payload: token });
      setIsLoading(false);
    }
    return response.status;
  }

  return { signIn, isLoading, error };
}
