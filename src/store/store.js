import { configureStore } from "@reduxjs/toolkit";
import { mailSlice } from "./slices/mail";

export const store = configureStore({
  reducer: {
    mail: mailSlice.reducer,
  },
});
