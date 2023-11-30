import { useState } from "react";

import PropTypes from "prop-types";

const Faq = ({ faqs }) => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-heading">Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            <span
              className={`toggle-icon ${openFAQ === index ? "up" : "down"}`}
            />
          </div>
          {openFAQ === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};
Faq.propTypes = {
  faqs: PropTypes.array.isRequired,
};

export default Faq;
