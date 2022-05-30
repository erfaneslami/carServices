import { useState } from "react";
import AuthContext from "./Auth-context";

const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);

  const isLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
  };

  const signupHandler = async (token, username) => {
    setToken(token);
    setUsername(username);
  };

  const logoutHandler = () => {
    setToken(null);
  };

  const AuthContextValue = {
    username,
    token,
    isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    signup: signupHandler,
  };

  return (
    <AuthContext.Provider value={AuthContextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
