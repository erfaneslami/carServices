import { useState } from "react";
import AuthContext from "./Auth-context";

const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);

  const isLoggedIn = !!token;

  const loginHandler = () => {
    // send login request
  };

  const signupHandler = async (token, username) => {
    // send signup request
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
