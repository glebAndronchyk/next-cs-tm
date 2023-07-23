import TeamCard from "@/app/(editorLayout)/editor/_components/TeamCard/TeamCard";
import { EGameSides } from "@/app/_shared/enums/gameEnums";

const Editor = () => {
  return (
    <>
      <TeamCard side={EGameSides.COUNTER_TERRORISTS} />
      <TeamCard side={EGameSides.TERRORISTS} />
    </>
  );
};

export default Editor;
