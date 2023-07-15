import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: EditorLoadingSliceInitialState = {
  redirectTo: "/editor",
  isPresented: false,
  parentDisplay: "hidden",
  isAnimatedOnEnter: false,
  isAnimatedOnExit: false,
};

const editorLoadingSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    setRedirectTo: (store, action: PayloadAction<string>) => {
      store.redirectTo = action.payload;
    },
    triggerAnimatePhase: (store) => {
      store.isPresented = true;
      store.parentDisplay = "flex justify-end";
    },
    triggerAnimatePhaseEnd: (store) => {
      store.isAnimatedOnEnter = true;
    },
    triggerExitPhase: (store) => {
      store.isPresented = false;
    },
    triggerAnimationEnd: (store) => {
      store.isAnimatedOnExit = true;
    },
    resetLoadingAnimationState: () => initialState,
  },
});

export const loadingState = {
  actions: editorLoadingSlice.actions,
  reducer: editorLoadingSlice.reducer,
};
