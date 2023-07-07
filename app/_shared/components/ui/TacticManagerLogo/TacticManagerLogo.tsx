import Image from "next/image";

import cs2BannerLogo from "@/public/images/cs2-banner-logo.png";
import SkewNotify from "@/app/_shared/components/ui/SkewNotify/SkewNotify";

const TacticManagerLogo = () => {
  return (
    <div>
      <Image src={cs2BannerLogo} alt="banner-logo" width={500} />
      <SkewNotify className="ml-auto mr-2" width="w-56">
        tactic manager
      </SkewNotify>
    </div>
  );
};

export default TacticManagerLogo;
