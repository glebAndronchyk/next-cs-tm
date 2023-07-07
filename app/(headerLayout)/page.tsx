import Container from "@/app/_shared/components/ui/Container/Container";
import Banner from "@/app/_shared/components/ui/Banner/Banner";
import Card from "@/app/_shared/components/ui/Card/Card";
import SkewNotify from "@/app/_shared/components/ui/SkewNotify/SkewNotify";

const HomePage = () => {
  return (
    <section className="bg-gray-pattern py-6 bg-no-repeat full-page">
      <Container>
        <Banner />
        <h3 className="font-bold text-5xl py-4 mb-20 border-b-2 border-blue-200">
          - Make your own tactics today !!!
        </h3>
        <Card
          asLink
          href="/editor"
          className="flex-centered relative w-96 h-80 mx-auto rounded-2xl border-2 border-primary-orange p-0 animate-[move-card-bg_15s_linear_infinite] bg-maps-pattern bg-[length:600px_316px] bg-repeat-x"
        >
          <div className="full-blur z-0 rounded-2xl" />
          <div className="absoulte rounded-full w-5 h-72 bg-primary-orange z-10 shadow-md shadow-secondary-orange" />
          <div className="absolute rounded-full w-72 h-5 bg-primary-orange z-10 shadow-md shadow-secondary-orange" />
          <SkewNotify className="cursor-default absolute z-20 top-[-15px] right-[-20px]">new</SkewNotify>
        </Card>
      </Container>
    </section>
  );
};

export default HomePage;
