const Newsletter = () => {
  return (
    <div className="Newsletter__section">
      <h1 className="newsletter__Section__tittle">Join Our Newsletter</h1>
      <p className="newletter_news">
        Never miss out on our updates, freebies and news
      </p>

      <form className="">
        <div className="newsletter__form__group flex flex-col">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email Here"
            required
            className="Newsletter__input md:w-2/3"
          />

          <button type="submit" className="Newsletter__button md:w-1/3">
            Send Message now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
