import "./Hero.css";
import Button from "../Button/Button";

const Hero = (props) => {
  return (
    <section className="hero" id="hero-section">
      <h2 className="hero__title">WORK</h2>
      <div className="hero__button">
        <Button color={"black"} >VIEW CASE</Button>
      </div>
    </section>
  );
};

export default Hero;
