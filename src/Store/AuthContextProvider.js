import { useState } from "react";
import AuthContext from "./Auth-context";

const AuthContextProvider = (props) => {
  const initialAuth = JSON.parse(localStorage.getItem("userAuth"));
  console.log(initialAuth);
  const [token, setToken] = useState(initialAuth?.token);
  const [username, setUsername] = useState(null);
  const [localId, setLocalId] = useState(initialAuth?.localId);

  const isLoggedIn = !!token;

  const loginHandler = (token, localId, username) => {
    setToken(token);
    setLocalId(localId);
    setUsername(username);

    localStorage.setItem("userAuth", JSON.stringify({ token, localId }));
  };

  const signupHandler = (token, username, localId) => {
    setToken(token);
    setUsername(username);
    setLocalId(localId);
    localStorage.setItem("userAuth", JSON.stringify({ token, localId }));
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
