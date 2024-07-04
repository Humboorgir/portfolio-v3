import HomeLayout from "@/layouts/home-layout";
import HeroSection from "@/components/home/hero-section";
import AboutSection from "@/components/home/about-section";
import ExperienceSection from "@/components/home/experience-section";
import ProjectsSection from "@/components/home/projects-section";
import PricingSection from "@/components/home/pricing-section";
import FAQSection from "@/components/home/faq-section";
import ContactSection from "@/components/home/contact-section";

const Home = () => {
  return (
    // TODO: fix the bug described below
    // in firefox, the blur filter cannot have a value of above 100px,
    // as a result, elements with blur-[140px] (or more) will
    // not look the same on chrome and firefox
    // to fix this, reduce the blur amount of the elements to 100px and reduce their opacity
    // this might not produce the exact same result but it will be close.
    <div className="relative antialiased">
      {/* background grid  */}
      <svg className="absolute top-0 left-0 bottom-0 right-0 opacity-20" width="100%" height="100%">
        <pattern id="smallGrid" width="25" height="25" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1" fill="#FFFFFF" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#smallGrid)" />
      </svg>

      <div
        className="absolute top-0 left-[50%] translate-x-[-50%] h-[200px] w-[600px] max-w-[60vw]
       bg-gradient-to-r from-primary/80 to-accent/60 blur-[140px]"
      />
      <HeroSection />

      <AboutSection />

      <ExperienceSection />

      <ProjectsSection />

      <PricingSection />

      <FAQSection />

      <ContactSection />
    </div>
  );
};

Home.getLayout = function getLayout(Page: React.ReactElement) {
  return <HomeLayout>{Page}</HomeLayout>;
};

export default Home;
