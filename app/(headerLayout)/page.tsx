import Container from "@/app/_shared/components/ui/Container/Container";
import Banner from "@/app/_shared/components/ui/Banner/Banner";
import CreateNewCard from "@/app/(headerLayout)/_components/CreateNewCard";

const HomePage = () => {
  return (
    <section className="bg-gray-pattern bg-cover py-6 bg-no-repeat full-page">
      <Container>
        <Banner />
        <h3 className="font-bold text-5xl py-4 mb-20 border-b-2 border-blue-200">
          - Make your own tactics today !!!
        </h3>
        <CreateNewCard />
      </Container>
    </section>
  );
};

export default HomePage;
