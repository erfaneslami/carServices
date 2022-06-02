import { useState } from "react";
import AuthContext from "./Auth-context";

const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);
  const [localId, setLocalId] = useState(null);

  const isLoggedIn = !!token;

  const loginHandler = (token, localId) => {
    setToken(token);
    setLocalId(localId);
  };

  const signupHandler = (token, username, localId) => {
    setToken(token);
    setUsername(username);
    setLocalId(localId);
  };

  const logoutHandler = () => {
    setToken(null);
  };

  const AuthContextValue = {
    username,
    token,
    localId: localId,
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
