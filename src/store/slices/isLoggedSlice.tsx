import { createSlice } from "@reduxjs/toolkit";

const storeValue = localStorage.getItem("isLogged");
const initialState: { value: number } = {
  value: storeValue ? parseFloat(storeValue) : 0,
};

export const isLoggedSlice = createSlice({
  name: "isLogged",
  initialState: initialState,
  reducers: {
    toggleLogin(state, action) {
      state.value = action.payload;
      localStorage.setItem("isLogged", JSON.stringify(state.value));
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleLogin } = isLoggedSlice.actions;

export default isLoggedSlice.reducer;
