import './styles/SearchInput.css'
import searchIcon from "../../../assets/icons__search_16px.svg";
import { selectFilter, setFilter } from "../../../store/gameReducer";
import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent } from "react";

const SearchInput = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newFilter = { ...filter, name: event.target.value };
    dispatch(setFilter(newFilter));
  };

  return (
    <div className="searchForm">
      <label htmlFor="search">Search</label>
      <input
        id="search"
        placeholder="Search"
        required
        value={filter.name}
        onChange={handleSearchChange}
      />
      <button type="submit">
        <img src={searchIcon} alt="Search Icon" />
      </button>
    </div>
  );
};

export default SearchInput;
