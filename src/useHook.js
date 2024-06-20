import { useEffect, useState } from "react";
import data from "./data.json";
const useHook = (a) => {
  const [add, setAdd] = useState(data);
  useEffect(() => {
    if (a === "all") {
      setAdd(data);
    } else if (a === "html") {
      const arr = data.filter((ele) => {
        const arr2 = ele.category.filter((item) => {
          return item === "css";
        });
        return arr2[0] === "css";
      });
      setAdd(arr);
    } else if (a === "js") {
      const arr = data.filter((ele) => {
        const arr2 = ele.category.filter((item) => {
          return item === "JS";
        });
        return arr2[0] === "JS";
      });
      setAdd(arr);
    } else if (a === "node") {
      const arr = data.filter((ele) => {
        const arr2 = ele.category.filter((item) => {
          return item === "node";
        });
        return arr2[0] === "node";
      });
      setAdd(arr);
    }
  }, [a]);

  return add;
};

export default useHook;
