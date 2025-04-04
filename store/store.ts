import { configureStore } from "@reduxjs/toolkit";
import requestApi from "./request";

export const store = configureStore({
  reducer: {
    [requestApi.reducerPath]: requestApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([
      requestApi.middleware
    ]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;