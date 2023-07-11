import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/_shared/redux/store";

export const useAppDispatch: () => AppDispatch = useDispatch;
