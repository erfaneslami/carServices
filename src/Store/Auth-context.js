import { createContext } from "react";

const AuthContext = createContext({
  username: null,
  token: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  signup: (token, username) => {},
});

export default AuthContext;
