import Link from "next/link";

import Container from "@/app/_shared/components/ui/Container/Container";
import CsgoStatsPlayerSearch from "@/app/(headerLayout)/_components/Header/CsgoStatsPlayerSearch/CsgoStatsPlayerSearch";
import ImperativeLogo from "@/app/_shared/components/ui/logos/ImperativeLogo/ImperativeLogo";
import LoginIcon from "@/app/_shared/components/ui/icons/LoginIcon";

const Header = () => {
  return (
    <header className="w-full bg-primary-orange py-4 px-3 bg-opacity-80">
      <Container className="flex-between-centered">
        <ImperativeLogo />
        <ul className="flex-between-centered">
          <li>
            <CsgoStatsPlayerSearch />
          </li>
        </ul>
        <Link href="/login" className="flex justify-between items-center w-20 text-xl font-bold text-blue-400">
          Login <LoginIcon />
        </Link>
      </Container>
    </header>
  );
};

export default Header;
