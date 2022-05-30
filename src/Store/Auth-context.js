import { createContext } from "react";

const AuthContext = createContext({
  username: null,
  token: null,
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  signup: (token, username) => {},
});

export default AuthContext;
