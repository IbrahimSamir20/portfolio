import Lottie from "lottie-react";
import lab from "../../../public/Animation lab.json";
import "./ImageSideHero.css";
import { useRef } from "react";
const ImageSideHero = () => {
  const lottieRef = useRef();
  return (
    <div className="lab">
      <Lottie
        lottieRef={lottieRef}
        animationData={lab}
        onLoadedImages={() => {
          lottieRef.current.setSpeed(0.5);
        }}
      />{" "}
    </div>
  );
};

export default ImageSideHero;
