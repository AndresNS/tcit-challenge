import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postSlice";
import uiReducer from "./uiSlice";

export const store = configureStore({
  reducer: {
    post: postReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
