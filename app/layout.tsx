import React from "react";
import { Inter } from "next/font/google";

import "./globals.css";

import ReduxProvider from "@/app/(shared)/_globalRedux/provider";
import Header from "@/app/(shared)/_components/header/header";
import { ComponentWithChildrenProps } from "@/app/(shared)/_interfaces/ComponentWithChildrenProps.interface";

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
