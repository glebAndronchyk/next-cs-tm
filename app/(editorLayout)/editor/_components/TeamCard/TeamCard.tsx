"use client";

import Card from "@/app/_shared/components/ui/Card/Card";
import { EGameSides } from "@/app/_shared/enums/gameEnums";
import { EFullTeamNamings } from "@/app/_shared/enums/gameEnums/EFullTeamNamings";
import AddNewButton from "@/app/(editorLayout)/editor/_components/AddNewButton/AddNewButton";
import { useAppSelector } from "@/app/_shared/hooks/useAppSelector";
import LockedCardView from "@/app/(editorLayout)/editor/_components/TeamCard/LockedCardView/LockedCardView";
import TriangleNotify from "@/app/(editorLayout)/editor/_components/TeamCard/TriangleNotify/TriangleNotify";
import Title from "@/app/(editorLayout)/editor/_components/TeamCard/Title/Title";

const TeamCard = ({ side }: { side: EGameSides }) => {
  const { selectors, locked, team } = useAppSelector(
    (state) => state.editorPage
  );
  const players = selectors[side].players;
  const titleText =
    side === EGameSides.COUNTER_TERRORISTS
      ? EFullTeamNamings.COUNTER_TERRORISTS
      : EFullTeamNamings.TERRORISTS;

  return (
    <section className="relative w-96 rounded-lg overflow-hidden">
      <LockedCardView title={titleText} side={side} locked={locked} />
      <Card className="w-full h-full bg-blue-400">
        <TriangleNotify side={side} pickedTeam={team} />
        <Title text={titleText} />
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
