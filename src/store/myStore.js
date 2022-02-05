import { configureStore } from "@reduxjs/toolkit";
import { ApiHandler } from "../Components/createApi";
export const store = configureStore({
  reducer: {
    [ApiHandler.reducerPath]: ApiHandler.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiHandler.middleware),
});
