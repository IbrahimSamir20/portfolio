/* eslint-disable react/prop-types */
import { ButtonClose } from "../Buttons/Buttons";
import "./Toggle.css";
export const Toggle = ({ click }) => {
  return (
    <>
      <div className=" fixed">
        <ul className="modal  ">
          <li>
            <ButtonClose click={click} />
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};
