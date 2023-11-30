const Newsletter = () => {
  return (
    <div className="Newsletter__section">
      <h1 className="newsletter__Section__tittle">Join Our Newsletter</h1>
      <p className="newletter_news">
        Never miss out on our updates, freebies and news
      </p>

      <form>
        <div className="newsletter__form__group">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email Here"
            required
            className="Newsletter__input"
          />

          <button type="submit" className="Newsletter__button">
            Send Message now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
