import { configureStore } from "@reduxjs/toolkit";
import isLoggedSlice from "./slices/isLoggedSlice";
import usernameSlice from "./slices/usernameSlice";
import likeSlice from "./slices/likeSlice";
import watchSlice from "./slices/watchSlice";

const store = configureStore({
  reducer: {
    isLogged: isLoggedSlice,
    username: usernameSlice,
    like: likeSlice,
    watch: watchSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
