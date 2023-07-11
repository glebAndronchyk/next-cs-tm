import ReduxProvider from "@/app/_shared/redux/Provider";
import { rajdhani } from "@/app/_shared/styles/fonts";
import { ReactNode } from "react";
import EditorLoadingAnimation from "@/app/_shared/components/animations/EditorLoadingAnimation/EditorLoadingAnimation";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" className={`${rajdhani.variable}`}>
      <ReduxProvider>
        <body className="bg-gray-100 min-h-screen flex flex-col font-rajdhani">
          {children}
          <EditorLoadingAnimation />
        </body>
      </ReduxProvider>
    </html>
  );
};

export default RootLayout;
