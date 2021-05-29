import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import uiReducer from "./uiSlice";

const store = configureStore({
  reducer: { auth: authReducer, ui: uiReducer },
});

export default store;
