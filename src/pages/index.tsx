import HomeLayout from "@/layouts/home-layout";
import HeroSection from "@/components/home/hero-section";
import AboutSection from "@/components/home/about-section";
import ExperienceSection from "@/components/home/experience-section";
import ProjectsSection from "@/components/home/projects-section";
import PricingSection from "@/components/home/pricing-section";
import FAQSection from "@/components/home/faq-section";
import ContactSection from "@/components/home/contact-section";
import BlogSection from "@/components/home/blog-section";

import Head from "next/head";

const Home = () => {
  return (
    <>
      {/* metadata  */}
      <Head>
        <title>IliyaFaz ~ Portfolio</title>

        <meta
          name="description"
          content="I'm Iliya, a self-taught, full-stack web developer with a deep passion for programming. 
          This is my portfolio, where you can find out more about me, take a look at projects I've previously built
          or even reach out to me!"
        />
      </Head>
      {/* page content  */}
      <div className="relative antialiased">
        {/* background grid  */}
        <svg
          className="absolute top-0 left-0 bottom-0 right-0 opacity-20"
          width="100%"
          height="100%">
          <pattern
            id="smallGrid"
            width="25"
            height="25"
            patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="#FFFFFF" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>

        <div
          aria-hidden
          className="absolute top-0 left-[50%] translate-x-[-50%] h-[260px] w-[600px] max-w-[60vw]
       bg-gradient-to-r from-primary/50 to-accent/30 blur-[100px]"
        />
        <HeroSection />

        <AboutSection />

        <ExperienceSection />

        <ProjectsSection />

        <PricingSection />

        <FAQSection />

        <ContactSection />

        <BlogSection />
      </div>
    </>
  );
};

Home.getLayout = function getLayout(Page: React.ReactElement) {
  return <HomeLayout>{Page}</HomeLayout>;
};

export default Home;
