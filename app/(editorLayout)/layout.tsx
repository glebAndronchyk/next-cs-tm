import { ReactNode } from "react";

import "../globals.css";
import Header from "@/app/(editorLayout)/_components/Header/Header";
import ExitTrigger from "@/app/_shared/components/animations/EditorLoadingAnimation/ExitTrigger";

const EditorLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ExitTrigger />
      <Header />
      <main className='z-10 p-6 flex justify-between grow'>{children}</main>
      <div className="w-screen h-screen absolute z-0 bg-blue-pattern bg-cover" />
    </>
  );
};

export default EditorLayout;
