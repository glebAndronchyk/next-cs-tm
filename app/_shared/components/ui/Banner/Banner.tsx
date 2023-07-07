import Container from "@/app/_shared/components/ui/Container/Container";
import TacticManagerLogo from "@/app/_shared/components/ui/TacticManagerLogo/TacticManagerLogo";

import { MetricsTailwind } from "@/app/_shared/interfaces/MetricsTailwind.interface";

interface BannerProps {
  tailwindWidth?: MetricsTailwind["tailwindWidth"];
}

const Banner = ({ tailwindWidth = "w-full" }: BannerProps) => {
  return (
    <Container
      element="article"
      className={`bg-primary-orange bg-opacity-80 h-56 flex-centered mb-4 cursor-default ${tailwindWidth}`}
    >
      <TacticManagerLogo />
    </Container>
  );
};

export default Banner;
