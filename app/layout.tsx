import React from "react";
import { Inter } from "next/font/google";

import "./globals.css";

import ReduxProvider from "@/app/_globalRedux/provider";
import Header from "@/app/_components/Header/header";
import { ComponentWithChildrenProps } from "@/interfaces/ComponentWithChildrenProps.interface";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "CS - tactic manager",
};

const RootLayout = ({ children }: ComponentWithChildrenProps) => {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <ReduxProvider>
          <Header />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
