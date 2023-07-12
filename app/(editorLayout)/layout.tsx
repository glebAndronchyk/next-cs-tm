import { ReactNode } from "react";

import "../globals.css";
import Header from "@/app/(editorLayout)/_components/Header/Header";

const EditorLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className='z-10 p-6 grow'>{children}</main>
      <div className="w-screen h-screen absolute z-0 bg-blue-pattern bg-cover" />
    </>
  );
};

export default EditorLayout;
