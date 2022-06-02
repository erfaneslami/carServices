import { createContext } from "react";

const AuthContext = createContext({
  username: null,
  token: null,
  localId: null,
  isLoggedIn: false,
  login: (token, localId) => {},
  logout: () => {},
  signup: (token, username, localId) => {},
});

export default AuthContext;
