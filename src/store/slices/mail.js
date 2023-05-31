import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    setEmailStore: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setEmailStore } = mailSlice.actions;
export default mailSlice.reducer;
