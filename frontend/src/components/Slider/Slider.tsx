import { useContext, useEffect } from "react";
import { ColumnsContext } from "../../context/ColumnsProvider";
import { circles } from "../../lib/constants/consts";
import { calcColumns } from "../../lib/utils/calc-columns";
import { getLineWidth } from "../../lib/utils/get-line-width";
import "./styles/Slider.css";

const Slider = () => {
  const { columns, setColumns } = useContext(ColumnsContext);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const newColumns = calcColumns(width);
      setColumns(newColumns);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setColumns]);

  return (
    <div className="slider">
      {circles.map((value) => (
        <div
          key={value}
          className={`circle ${columns >= value ? "active" : "inactive"}`}
          onClick={() => setColumns(value)}
        >
          {value}
        </div>
      ))}
      <div className="line-background"></div>
      <div className="line" style={{ width: getLineWidth(columns) }}></div>
    </div>
  );
};

export default Slider;
