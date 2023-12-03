import CoursesHero from "../components/CoursesHero";
import AvailableCourses from "../components/AvailableCourses";
import Faq from "../components/Faq";
import DownloadApp from "../components/DownloadApp";
import CourseSearch from "../components/CourseSearch";
import Process from "../components/Process";
import Contact from "../components/Contact";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

const Courses = () => {
  const faqs = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "Why use React?",
      answer:
        "React is flexible and efficient, making it popular for frontend development.",
    },
    {
      question: "Why use React?",
      answer:
        "React is flexible and efficient, making it popular for frontend development.",
    },
    {
      question: "Why use React?",
      answer:
        "React is flexible and efficient, making it popular for frontend development.",
    },
    {
      question: "Why use React?",
      answer:
        "React is flexible and efficient, making it popular for frontend development.",
    },
    {
      question: "Why use React?",
      answer:
        "React is flexible and efficient, making it popular for frontend development.",
    },
    // ... more FAQs
  ];
  return (
    <div>
      <CoursesHero />
      <AvailableCourses />
      <CourseSearch />
      <Faq faqs={faqs} />
      <DownloadApp />
      <Process />
      <Contact />
      <Newsletter />
      <Footer />

      <Copyright />
    </div>
  );
};

export default Courses;
