import Choose from "../components/Choose";
import Hero from "../components/Hero";
import Partner from "../components/Partner";
import Process from "../components/Process";
import DownloadApp from "../components/DownloadApp";
import Faq from "../components/Faq";
import Contact from "../components/Contact";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

const Home = () => {
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
      <Hero />
      <Choose />
      <Partner />
      <Process />
      <DownloadApp />
      <Faq faqs={faqs} />
      <DownloadApp />
      <Contact />
      <Newsletter />

      <Footer />
      <Copyright />
    </div>
  );
};

export default Home;
