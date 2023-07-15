import { configureStore } from "@reduxjs/toolkit";

import globalPage from "@/app/_shared/redux/slices/globalPageSlice";
import editorReducers from "@/app/_shared/redux/slices/editor";

export const store = configureStore({
  reducer: { globalPage, ...editorReducers },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
