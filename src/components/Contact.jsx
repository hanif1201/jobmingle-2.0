import { IoLocationOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="Contact__section">
      <h1 className="py-6 text-yellow text-4xl font-bold  text-center">
        Contact Information
      </h1>

      <div className="contact__section__content flex flex-col md:flex-row">
        <div className="contact__office ">
          <h1 className="head__office">Head office</h1>
          <div className="location">
            <p className="location__content">
              <IoLocationOutline className="icon__name" />
              Location : Ajah, Lagos, Nigeria
            </p>

            <p className="location__content">
              <MdEmail className="icon__name" />
              Email : Jobmingo@info.com
            </p>

            <p className="location__content">
              <FaPhoneVolume className="icon__name" />
              Phone : 12345709876543
            </p>
          </div>
        </div>

        <div className="contact__form md:w-1/2">
          <form>
            <div className="form__group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="contact__input"
              />
            </div>
            <div className="form__group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="contact__input"
              />
            </div>
            <div className="form__group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                className="contact__input"
              />
            </div>
            <div className="form__group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                required
                className="contact__input"
              />
            </div>
            <button type="submit" className="form__button">
              Send Message now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
