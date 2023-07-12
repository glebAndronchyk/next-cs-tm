import Card from "@/app/_shared/components/ui/Card/Card";

interface TeamCardProps {
  title: "Counter-Terrorists" | "Terrorists";
}

const TeamCard = ({ title }: TeamCardProps) => {
  return (
    <Card className="w-96 h-full">
      <h3>{title}</h3>
    </Card>
  );
};

export default TeamCard;
