const Newsletter = () => {
  return (
    <div className="Newsletter__section">
      <h1 className="newsletter__Section__tittle">Join Our Newsletter</h1>
      <p className="newletter_news">
        Never miss out on our updates, freebies and news
      </p>

      <form>
        <div className="newsletter__form__group md:flex md:flex-row">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email Here"
            required
            className="Newsletter__input md:w-2/4 flex mr-5 "
          />

          <button
            type="submit"
            className="Newsletter__button md:mt-0 md:w-1/4 flex"
          >
            Send Message now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
