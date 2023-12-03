import AboutSectionItem from "./AboutSectionItem";
import about001 from "../assets/about.png";
import about002 from "../assets/about002.png";

const AboutSection = () => {
  const heading001 = "Our Vision";
  const heading002 = "Our Mission";
  const heading003 = "Our Values";

  const text001 =
    " Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lleo.eget mi in purus lobortis eleifend. Sed nec ante ";
  return (
    <div>
      <AboutSectionItem image={about001} heading={heading001} text={text001} />
      <AboutSectionItem image={about002} heading={heading002} text={text001} />
      <AboutSectionItem image={about001} heading={heading003} text={text001} />
    </div>
  );
};

export default AboutSection;
