import { configureStore } from "@reduxjs/toolkit";

import globalPage from "@/app/_shared/redux/slices/globalPageSlice";
import editor from "@/app/_shared/redux/slices/editorSlice";

export const store = configureStore({
  reducer: { globalPage, editor },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
