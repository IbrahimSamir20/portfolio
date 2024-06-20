import "./SidebarMain.css";
// eslint-disable-next-line react/prop-types

// eslint-disable-next-line react/prop-types
const SidebarMain = ({ activeArr }) => {
  const [active, setActive] = activeArr;

  return (
    <div className="sidebar">
      <button
        onClick={() => {
          setActive("all");
        }}
        className={active === "all" ? "active" : ""}
      >
        All Project
      </button>
      <button
        onClick={() => {
          setActive("html");
        }}
        className={active === "html" ? "active" : ""}
      >
        HTML & CSS
      </button>
      <button
        onClick={() => setActive("js")}
        className={active === "js" ? "active" : ""}
      >
        JavaScript
      </button>
      <button
        onClick={() => setActive("react")}
        className={active === "react" ? "active" : ""}
      >
        React & MUI
      </button>
      <button
        onClick={() => setActive("node")}
        className={active === "node" ? "active" : ""}
      >
        Node & Express
      </button>
    </div>
  );
};

export default SidebarMain;
