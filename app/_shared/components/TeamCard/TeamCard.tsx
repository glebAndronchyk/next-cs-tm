"use client";

import Card from "@/app/_shared/components/ui/Card/Card";
import { EGameSides } from "@/app/_shared/enums/gameEnums";
import { EFullTeamNamings } from "@/app/_shared/enums/gameEnums/EFullTeamNamings";
import AddNewButton from "@/app/(editorLayout)/editor/_components/AddNewButton/AddNewButton";
import { useAppSelector } from "@/app/_shared/hooks/useAppSelector";

const TeamCard = ({ side }: { side: EGameSides }) => {
  const { selectors, locked } = useAppSelector((state) => state.editorPage);
  const players = selectors[side].players;
  const titleText =
    side === EGameSides.COUNTER_TERRORISTS
      ? EFullTeamNamings.COUNTER_TERRORISTS
      : EFullTeamNamings.TERRORISTS;

  return (
    <section className="items-stretch relative w-96">
      {locked && <div className="absolute h-full w-full bg-red-700" />}
      <Card className="w-full h-full">
        <h3>{titleText}</h3>
        <ul>
          {players.map((player) => (
            <li key={player.id}>{player.name}</li>
          ))}
        </ul>
        {players.length < 5 && <AddNewButton disabled={locked} addTo={side} />}
      </Card>
    </section>
  );
};

export default TeamCard;
