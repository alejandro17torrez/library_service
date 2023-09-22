import { useState } from "react"
import { createUser } from "../api/auth"
import { SignUpInterface } from "../definations/interfaces/user"

export const useSignUp = () => {
  const [error, setError] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const signUp = async ({
    username,
    email,
    firstName,
    lastName,
    password,
    isStaff=false,
    isSuperuser=false,
  }: SignUpInterface) => {
    setIsSending(true);
    setError(null);

    const response: Response = await createUser({
      username: username,
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
      isStaff: isStaff,
      isSuperuser: isSuperuser,
    });
    const newUser = await response.json();

    if (!response.ok) {
      setIsSending(false);
      setError(newUser.error);
    };
    if (response.ok) {
      setIsSending(false);
    }

    return newUser;
  }
  return { signUp, isSending, error };
}
