import { ReactNode } from "react";

import "../globals.css";
import { rajdhani } from "@/app/_shared/styles/fonts";

import ReduxProvider from "@/app/_shared/redux/Provider";
import Header from "@/app/_shared/components/Header/Header";
import EditorLoading from "@/app/_shared/components/animations/EditorLoadingAnimation/EditorLoading";

export const metadata = {
  title: "CS - tactic manager",
  description: "Counter-Strike tactic manager",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" className={`${rajdhani.variable}`}>
      <ReduxProvider>
        <body className="bg-gray-100 min-h-screen flex flex-col font-rajdhani">
          <Header />
          <main className="grow">{children}</main>
          <EditorLoading />
        </body>
      </ReduxProvider>
    </html>
  );
};

export default RootLayout;
