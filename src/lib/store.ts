import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api"; // Import RTK Query API slice

export const makeStore = () => {
  return configureStore({
    reducer: {
      [api.reducerPath]: api.reducer, // Add RTK Query reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware), // Add RTK Query middleware
  });
};

// TypeScript Types
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
