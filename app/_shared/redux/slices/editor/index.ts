import { loadingState } from "@/app/_shared/redux/slices/editor/editorLoadingSlice";
import { pageState } from "@/app/_shared/redux/slices/editor/editorPageSlice";

const editorReducers = {
  editorLoading: loadingState.reducer,
  editorPage: pageState.reducer,
};

export const {
  resetLoadingAnimationState,
  triggerAnimationEnd,
  triggerAnimatePhaseEnd,
  triggerExitPhase,
  triggerAnimatePhase,
  setRedirectTo,
  pickMap,
  pickSide,
  setColor,
  setWeapon,
  addNewPlayer,
} = { ...loadingState.actions, ...pageState.actions };
export default editorReducers;
