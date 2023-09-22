import { Auth, Action, IAuthContext, State } from "../definations/interfaces/auth";
import { AuthProvider } from "../definations/interfaces/providers";
import { createContext, useEffect, useReducer } from "react";


const initialState: State = {
  token: null,
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const authReducer = (state: State, action: Action): State => {
  switch (action?.type) {
    case Auth.LOGIN:
      return { token: action.payload }
    case Auth.LOGOUT:
      return { token: null }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }: AuthProvider) => {
  const [state, dispatch] = useReducer(authReducer, initialState) 
  
  useEffect(() => {
    // @ts-ignore
    const token = JSON.parse(sessionStorage.getItem(Auth.USER))
    if (token && !state.token) {
      dispatch({
        type: Auth.LOGIN,
        payload: token,
      })
    } else {
      sessionStorage.removeItem(Auth.USER)
    } 
  }, [])
  
  return (
    <AuthContext.Provider value={{state, dispatch}}>
      { children }
    </AuthContext.Provider>
  ); 
}
