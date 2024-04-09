import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MenuContext } from "../../context/MenuProvider";
import { sortOptions } from "../../lib/constants/consts";
import { selectFilter, setFilter } from "../../store/gameReducer";
import "./styles/Filtration.css";

const Sorting = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const { isMenuOpen } = useContext(MenuContext);

  const handleSetSort = (name: string) => {
    dispatch(setFilter({ ...filter, sort: name }));
  };

  return (
    <div className={`optionsContainer ${!isMenuOpen && "closed"}`}>
      <span>Sort</span>
      <div className="options">
        {sortOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSetSort(option.name)}
            className={filter.sort === option.name ? "selected" : ""}
          >
            {option.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sorting;
