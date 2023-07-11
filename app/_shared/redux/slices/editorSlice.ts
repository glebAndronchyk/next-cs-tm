import { createSlice } from "@reduxjs/toolkit";

interface EditorSliceInitialState {
  loading: {
    isPresented: boolean;
    parentDisplay: "hidden" | "flex justify-end";
    isAnimatedOnEnter: boolean;
    isAnimatedOnExit: boolean;
  };
}

const initialState: EditorSliceInitialState = {
  loading: {
    isPresented: false,
    parentDisplay: "hidden",
    isAnimatedOnEnter: false,
    isAnimatedOnExit: false,
  },
};

const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    triggerAnimatePhase: (store) => {
      store.loading.isPresented = true;
      store.loading.parentDisplay = "flex justify-end";
    },
    triggerAnimatePhaseEnd: (store) => {
      store.loading.isAnimatedOnEnter = true;
    },
    triggerExitPhase: (store) => {
      store.loading.isPresented = false;
    },
    triggerAnimationEnd: (store) => {
      store.loading.isAnimatedOnExit = true;
    },
    resetLoadingAnimationState: (store) => {
      store.loading = { ...initialState.loading };
    },
  },
});

export const {
  triggerAnimatePhase,
  triggerExitPhase,
  triggerAnimatePhaseEnd,
  resetLoadingAnimationState,
  triggerAnimationEnd,
} = editorSlice.actions;
export default editorSlice.reducer;
