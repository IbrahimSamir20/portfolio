import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Header.css";
import { Toggle } from "../../components/Toggle/Toggle";
import {
  BtnLight,
  ButtonMenu,
  BtnDark,
} from "../../components/Buttons/Buttons";
const Header = () => {
  // useState|for Show Menu
  const [showMenu, setShowMenu] = useState(false);

  //Handel OnClick
  const handelShow = () => {
    setShowMenu(true);
  };
  const handelClose = () => {
    setShowMenu(false);
  };
  //theme
  const [them, setThem] = useState(localStorage.getItem('themeMod'));
  useEffect(() => {
    if (them === "light") {
      document.body.classList.remove("dark");
      document.body.classList.toggle(them);
    } else {
      document.body.classList.remove("light");
      document.body.classList.toggle(them);
    }
  }, [them]);

  //View Return
  return (
    <header>
      <ButtonMenu on={handelShow} />
      <div />
      <Navbar />

      {them === "dark" && <BtnDark setThem={setThem} />}
      {them === "light" && <BtnLight setThem={setThem} />}

      {showMenu && <Toggle click={handelClose} />}
    </header>
  );
};

export default Header;
