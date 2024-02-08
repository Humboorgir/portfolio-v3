import HomeLayout from "@/layouts/home-layout";
import HeroSection from "@/components/home/hero-section";
import ExperienceSection from "@/components/home/experience-section";
import ProjectsSection from "@/components/home/projects-section";

const Home = () => {
  return (
    <div className="antialiased">
      <HeroSection />

      <ExperienceSection />

      <ProjectsSection />
    </div>
  );
};

Home.getLayout = function getLayout(Page: React.ReactElement) {
  return <HomeLayout>{Page}</HomeLayout>;
};

export default Home;
