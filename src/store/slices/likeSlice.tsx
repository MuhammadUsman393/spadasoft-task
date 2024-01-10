import { createSlice } from "@reduxjs/toolkit";

const storeValue = localStorage.getItem("like");
const initialState: { value: number[] } = {
  value: storeValue ? JSON.parse(storeValue) : [],
};

export const likeSlice = createSlice({
  name: "like",
  initialState: initialState,
  reducers: {
    setLike(state, action) {
      state.value.push(action.payload);
      localStorage.setItem("like", JSON.stringify(state.value));
    },
    removeLike(state, action) {
      let index = state.value.findIndex((item) => item === action.payload);
      state.value.splice(index, 1);
      localStorage.setItem("like", JSON.stringify(state.value));
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLike, removeLike } = likeSlice.actions;

export default likeSlice.reducer;
