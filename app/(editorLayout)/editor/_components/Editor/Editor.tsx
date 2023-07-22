import TeamCard from "@/app/_shared/components/TeamCard/TeamCard";
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
