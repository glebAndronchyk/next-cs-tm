import { EFullTeamNamings } from "@/app/_shared/enums/gameEnums/EFullTeamNamings";
import classNames from "classnames";

const Title = ({ text }: { text: EFullTeamNamings }) => {
  const titleClassName = classNames(
    "pb-0.5 mb-4 border-b-2 text-xl tracking-wider",
    {
      "border-primary-orange text-primary-orange":
        text === EFullTeamNamings.TERRORISTS,
      "border-blue-50 text-blue-50":
        text === EFullTeamNamings.COUNTER_TERRORISTS,
    }
  );

  return <h3 className={titleClassName}>{text}</h3>;
};

export default Title;
