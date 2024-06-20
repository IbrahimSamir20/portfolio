import { useEffect, useState } from "react";
import { ButtonUp } from "./components/Buttons/Buttons";
import Header from "./section/1-header/Header";
import Hero from "./section/2-hero/Hero";
import Main from "./section/3-main/Main";
import Contact from "./section/4-contact/Contact";
import Footer from "./section/5-footer/Footer";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);
  const [showBtn, setShowBtn] = useState(false);

  return (
    <>
      <div id="scroll" className="container">
        <Header />
        <Hero />
        <div className="divider" />
        <Main />
        <div className="divider" />
        <Contact />
        <div className="divider" />
        <Footer />
         <ButtonUp show={showBtn} />
      </div>
    </>
  );
}

export default App;
