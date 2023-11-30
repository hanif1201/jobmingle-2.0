import jobmainhero from "../assets/JobMainHero.png";

const JobMainHero = () => {
  return (
    <div className="hero__section">
      <div className="hero__section__content">
        <h1 className="hero__section__content__title">
          Your <span className="hero__span">Dream Remote Job </span>Awaits - Let
          US Skill You Up and Giude You there
        </h1>
        <p className="hero__section__content__text">
          Join the exclusive set of individuals we are currently making their
          dream remote job a reality.
        </p>
        <h3 className="hero__tagline">Join the JobMingle family today</h3>
        <div className="hero__buttons">
          <button className="btn--hero btn--primary">Get Started</button>
          <button className="btn--hero btn--secondary">
            Find Your Dream Remote Job
          </button>
        </div>
      </div>
      <div className="hero__image">
        <img src={jobmainhero} alt="" />
      </div>
    </div>
  );
};

export default JobMainHero;
