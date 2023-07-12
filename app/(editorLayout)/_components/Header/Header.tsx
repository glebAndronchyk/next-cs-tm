import Container from "@/app/_shared/components/ui/Container/Container";
import EditorLogo from "@/app/(editorLayout)/_components/Header/EditorLogo/EditorLogo";
import HeaderUserSection from "@/app/(headerLayout)/_components/HeaderUserSection/HeaderUserSection";

const Header = () => {
  return (
    <header className="z-10 bg-gray-200 bg-opacity-40">
      <Container className="p-4 flex justify-between items-center">
        <EditorLogo />
        <HeaderUserSection />
      </Container>
    </header>
  );
};

export default Header;
