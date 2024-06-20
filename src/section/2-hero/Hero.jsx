import "./Hero.css";
import TextSideHero from "../../components/TextSideHero/TextSideHero";
import ImageSideHero from "../../components/ImageSideHero/ImageSideHero";
const Hero = () => {
  return (
    <section className="hero">
      <TextSideHero />
      <ImageSideHero />
    </section>
  );
};

export default Hero;
