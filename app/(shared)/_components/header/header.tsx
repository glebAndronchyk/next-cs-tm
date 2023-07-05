import Link from "next/link";

import Container from "@/app/(shared)/_components/container/container";
import CsgoStatsPlayerSearch from "@/app/(shared)/_components/header/csgoStatsPlayerSearch/csgoStatsPlayerSearch";

const Header = () => {
  return (
    <header className="w-full bg-primary-orange py-5 px-3">
      <Container className="flex-between-centered">
        <h1>Logo</h1>
        <ul className="flex-between-centered">
          <li>
            <CsgoStatsPlayerSearch />
          </li>
          <li>1</li>
          <li>1</li>
        </ul>
        <Link href="/login">Login</Link>
      </Container>
    </header>
  );
};

export default Header;
