import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";
import { ROLE } from "helpers/enums";

type Auth = {
  user: string;
  roles: ROLE[];
  accessToken: string;
  pwd: string;
};

type Context = {
  auth: Auth;
  setAuth: Dispatch<SetStateAction<Auth>>;
  resetAuth: () => void;
};

const initialState: Auth = {
  user: "",
  accessToken: "",
  pwd: "",
  roles: [],
};

export const AuthContext = createContext<Context>({
  auth: initialState,
  setAuth: () => {},
  resetAuth: () => {},
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [auth, setAuth] = useState<Auth>(initialState);

  const resetAuth = () => setAuth(initialState);

  return (
    <AuthContext.Provider value={{ auth, setAuth, resetAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
