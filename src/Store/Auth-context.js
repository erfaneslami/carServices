import { createContext } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  signup: (userData) => {},
});

export default AuthContext;
