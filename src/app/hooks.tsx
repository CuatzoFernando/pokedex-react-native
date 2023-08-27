import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { RootState, AppDispatch } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();

// permite el tipo de dato del useState<RootState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

