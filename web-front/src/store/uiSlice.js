import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { notification: null },
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
        action: action.payload.action,
      };
    },
    hideNotification(state) {
      state.notification = null;
    },
  },
});

export const {showNotification, hideNotification} = uiSlice.actions;

export default uiSlice.reducer;
