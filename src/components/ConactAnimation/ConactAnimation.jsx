import Lottie from "lottie-react";
import "./ConactAnimation.css";
import anima from "../../../public/anim.json";

const ConcatAnimation = () => {
  return (
    <div className="emailAnim ">
      <Lottie animationData={anima} />
    </div>
  );
};

export default ConcatAnimation;
