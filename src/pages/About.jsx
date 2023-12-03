import AboutHero from "../components/AboutHero";
import AboutSection from "../components/AboutSection";
import Contact from "../components/Contact";
import Copyright from "../components/Copyright";
import DownloadApp from "../components/DownloadApp";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Partner from "../components/Partner";

const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutSection />
      <Partner />
      {/* <OurTeam /> */}
      <DownloadApp />
      <Contact />
      <Newsletter />
      <Footer />
      <Copyright />
    </div>
  );
};

export default About;
