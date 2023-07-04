"use client";

import { Provider } from "react-redux";

import { store } from "@/app/_globalRedux/store";
import { ComponentWithChildrenProps } from "@/interfaces/ComponentWithChildrenProps.interface";

const ReduxProvider = ({ children }: ComponentWithChildrenProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
