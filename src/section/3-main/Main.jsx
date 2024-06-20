import "./Main.css";
import SidebarMain from "../../components/SidebarMain/SidebarMain";
import CardMain from "../../components/CardsMain/CardsMain";
import { useState } from "react";
import useHook from "../../useHook";

const Main = () => {
  const [active, setActive] = useState("");
  const arr = useHook(active);
  return (
    <section className="main">
      <SidebarMain activeArr={[active, setActive]} />
      <div className="cardStage">
        <CardMain panda={arr} />
      </div>
    </section>
  );
};

export default Main;
