import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  token: "",
  localId: "",
  username: "",
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.localId = action.payload.localId;
      state.token = action.payload.token;
      state.username = action.payload.username;
    },

    Logout(state) {
      state.isLoggedIn = false;
      state.localId = "";
      state.token = "";
      state.username = "";
    },
  },
});

const signup = (userData) => {
  return async (dispatch) => {
    const sendSignupReq = async () => {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBCrkX0aUvOpsnp-QAW1mds8-r9HDqrWfc",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email: userData.email,
            password: userData.password,
            returnSecureToken: true,
          }),
        }
      );

      const data = await response.json();

      if (data.error) throw data;

      const sendToDataBaseRes = await fetch(
        `https://carservices-server-default-rtdb.firebaseio.com/users/${data.localId}.json`,
        {
          method: "PUT",
          body: JSON.stringify({
            username: userData.fullName,
          }),
        }
      );

      if (!sendToDataBaseRes.ok) {
        console.log(sendToDataBaseRes);
        throw new Error("failed to send data to database ! ");
      }

      dispatch(
        AuthActions.login({
          localId: data.localId,
          token: data.token,
          username: data.fullName,
        })
      );
    };

    try {
      await sendSignupReq();
    } catch (error) {
      console.log(error);
    }
  };
};

export const AuthActions = AuthSlice.actions;

export default AuthSlice.reducer;
