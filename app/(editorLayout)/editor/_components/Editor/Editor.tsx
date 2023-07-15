'use client'

import { useSearchParams } from "next/navigation";
import TeamCard from "@/app/_shared/components/TeamCard/TeamCard";

const Editor = () => {
  const urlQuery = useSearchParams();
  const tacticId = urlQuery.get("tactic");

  return (
    <div className="flex justify-between">
      <TeamCard title="Counter-Terrorists" />
      <TeamCard title="Terrorists" />
    </div>
  );
};

export default Editor;
