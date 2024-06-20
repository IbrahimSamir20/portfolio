/* eslint-disable react/no-unescaped-entities */
import "./TextSideHero.css";
const TextSideHero = () => {
  return (
    <div className="article ">
      <div className="headerAvatar">
        <div className="info">
          <img className="image" src={"/icon.jpg"} alt="avatar" />
          <div className="details">
            <h3>
              <span className="icon-vcard"></span>Ibrahim Samir
            </h3>
            <h6>
              {" "}
              <span className="icon-briefcase"></span>front end web developer
              engineer
            </h6>
            <h6>
              {" "}
              <span className="icon-home"></span>Alexandria,egypt
            </h6>
          </div>
        </div>

        <img src={"/public/icon.jpg"} alt="avatar" />
        <span className="icon-verified"></span>
      </div>
      <h1>Software designer, founder, and amateur astronaut.</h1>
      <p>
        I'm Ibrahim Samir, a software designer and based in Alexandria City. I'm
        the founder and CEO of Planetaria, where we develop ' echnologies that
        empower regular people tc space on their own terms
      </p>
      <div className="icons">
        <span className="icon icon-linkedin"></span>
        <span className="icon icon-github"></span>
        <span className="icon icon-instagram"></span>
        <span className="icon icon-twitter"></span>
      </div>
    </div>
  );
};

export default TextSideHero;
