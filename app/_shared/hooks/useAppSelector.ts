import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "@/app/_shared/redux/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
