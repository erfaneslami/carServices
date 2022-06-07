import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthSlice";
import UiReducer from "./UISlice";

const store = configureStore({
  reducer: { auth: AuthReducer, ui: UiReducer },
});

export default store;
