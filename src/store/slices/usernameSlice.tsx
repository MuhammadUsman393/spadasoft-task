import { createSlice } from "@reduxjs/toolkit";

const storeValue = localStorage.getItem("username");
const initialState: { value: string } = {
  value: storeValue ? JSON.parse(storeValue) : "",
};

export const usernameSlice = createSlice({
  name: "username",
  initialState: initialState,
  reducers: {
    setUser(state, action) {
      state.value = action.payload;
      localStorage.setItem("username", JSON.stringify(state.value));
    },
    removeUser(state) {
      state.value = "";
      localStorage.setItem("username", JSON.stringify(state.value));
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, removeUser } = usernameSlice.actions;

export default usernameSlice.reducer;
