import Link from "next/link";
import Image from "next/image";

import logo from "@/public/images/cs2-logo.png";

const ImperativeLogo = () => {
  return (
    <h1>
      <Link href="/">
        <Image priority src={logo} alt="logo" width={160} height={16} />
      </Link>
    </h1>
  );
};

export default ImperativeLogo;
