import Link from "next/link";

import Container from "@/app/_components/Container/container";

const Header = () => {
  return (
    <header className="w-full bg-primary-orange py-5 px-3">
      <Container className="flex-between-centered">
        <h1>Logo</h1>
        <ul className="flex-between-centered">
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
        <Link href="/login">Login</Link>
      </Container>
    </header>
  );
};

export default Header;
