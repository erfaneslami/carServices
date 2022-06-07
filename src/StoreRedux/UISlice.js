import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notification: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setNotification(state, action) {
      state.notification = {
        status: action.payload.state,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
