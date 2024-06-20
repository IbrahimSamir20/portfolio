/* eslint-disable react/prop-types */
import "./Buttons.css";
// {{{{{{{ M e n u  B u t t o n }}}}}}}
const ButtonMenu = ({ on }) => {
  return (
    <div className="menu">
      <button onClick={on} className="icon-menu"></button>
    </div>
  );
};

// {{{{{{{ T h e m e  B u t t o n }}}}}}}
const BtnDark = ({ setThem }) => {
  return (
    <div className="buttonTheme">
      <button
        onClick={() => {
          localStorage.setItem("themeMod", "light");
          setThem(localStorage.getItem("themeMod"));
        }}
        className=" icon-moon-o"
      ></button>
    </div>
  );
};

// {{{{{{{ C l o s e  B u t t o n }}}}}}}
const ButtonClose = ({ click }) => {
  return (
    <div>
      <button onClick={click} className=" icon-close "></button>
    </div>
  );
};

const ButtonUp = ({ show }) => {
  return (
    <div style={{ opacity: show ? 1 : 0, transition: "0.3s" }} className="up">
      <a href="#scroll">
        <button className="icon-keyboard_arrow_up"></button>
      </a>
    </div>
  );
};
//Light Button
const BtnLight = ({ setThem }) => {
  return (
    <div className="light">
      <button
        onClick={() => {
          localStorage.setItem("themeMod", "dark");
          setThem(localStorage.getItem("themeMod"));
        }}
        className="icon-sun"
      ></button>
    </div>
  );
};

export { ButtonMenu, BtnDark, ButtonClose, ButtonUp, BtnLight };
