import React, { useContext } from "react";
import { MenuContext } from "../../context/MenuProvider";

interface IOptionsContainer {
  title: string;
  options: { id: number; name: string }[];
  onClick: (id: number) => void;
  selectedOptions: number[];
}

const OptionsContainer: React.FC<IOptionsContainer> = ({
  title,
  options,
  onClick,
  selectedOptions,
}) => {
  const { isMenuOpen } = useContext(MenuContext);

  return (
    <div className={`optionsContainer ${!isMenuOpen && "closed"}`}>
      <span>{title}</span>
      <div className="options">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onClick(option.id)}
            className={selectedOptions.includes(option.id) ? "selected" : ""}
          >
            {option.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OptionsContainer;
