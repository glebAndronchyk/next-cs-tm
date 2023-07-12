import { ReactNode } from "react";

import "../globals.css";

import Header from "@/app/(headerLayout)/_components/Header/Header";

export const metadata = {
  title: "CS - tactic manager",
  description: "Counter-Strike tactic manager",
};

const EntryLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="grow">{children}</main>
    </>
  );
};

export default EntryLayout;
