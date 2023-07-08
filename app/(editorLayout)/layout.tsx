import { ReactNode } from "react";

import "../globals.css";

import { rajdhani } from "@/app/_shared/styles/fonts";
import ReduxProvider from "@/app/_shared/globalRedux/provider";

const EditorLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" className={`${rajdhani.variable}`}>
      <ReduxProvider>
        <body className="bg-gray-100 min-h-screen flex flex-col font-rajdhani">
          <main className="grow">{children}</main>
        </body>
      </ReduxProvider>
    </html>
  );
};

export default EditorLayout;
