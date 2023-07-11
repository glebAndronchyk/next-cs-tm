import { ReactNode } from "react";

import "../globals.css";

const EditorLayout = ({ children }: { children: ReactNode }) => {
  return <div>header{children}</div>;
};

export default EditorLayout;
