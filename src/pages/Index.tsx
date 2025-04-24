
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProsCons from "@/components/ProsCons";
import Professions from "@/components/Professions";
import Career from "@/components/Career";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProsCons />
      <Professions />
      <Career />
      <Education />
      <Skills />
      <Footer />
    </div>
  );
};

export default Index;
