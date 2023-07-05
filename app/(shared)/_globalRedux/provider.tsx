"use client";

import { Provider } from "react-redux";

import { store } from "@/app/(shared)/_globalRedux/store";
import { ComponentWithChildrenProps } from "@/app/(shared)/_interfaces/ComponentWithChildrenProps.interface";

const ReduxProvider = ({ children }: ComponentWithChildrenProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
