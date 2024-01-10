import { createSlice } from "@reduxjs/toolkit";

const storeValue = localStorage.getItem("watch");
const initialState: { value: number[] } = {
  value: storeValue ? JSON.parse(storeValue) : [],
};

export const watchSlice = createSlice({
  name: "watch",
  initialState: initialState,
  reducers: {
    setWatch(state, action) {
      state.value.push(action.payload);
      localStorage.setItem("watch", JSON.stringify(state.value));
    },
    removeWatch(state, action) {
      let index = state.value.findIndex((item) => item === action.payload);
      state.value.splice(index, 1);
      localStorage.setItem("watch", JSON.stringify(state.value));
    },
  },
});

// Action creators are generated for each case reducer function
export const { setWatch, removeWatch } = watchSlice.actions;

export default watchSlice.reducer;
