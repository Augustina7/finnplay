import Header from "../components/Header/Header";
import { IData } from "../lib/types/types";
import SearchInput from "../ui/inputs/SearchInput/SearchInput";
import _data from "../data.json";
import Button from "../ui/buttons/Button/Button";
import GameList from "../components/GameList/GameList";
import Providers from "../components/Filtration/Providers";
import Groups from "../components/Filtration/Groups";
import { resetFilter, selectGamesAmount } from "../store/gameReducer";
import { useDispatch, useSelector } from "react-redux";
import Sorting from "../components/Filtration/Sorting";
import Slider from "../components/Slider/Slider";
import menu from "../assets/icons__menu_14px.svg";
import { Dispatch, SetStateAction, useContext } from "react";
import { MenuContext } from "../context/MenuProvider";

interface HomeProps {
  username: string;
  loggedIn: boolean;
  setUsername: Dispatch<SetStateAction<string>>;
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const Home = ({ username, setUsername, loggedIn, setLoggedIn }: HomeProps) => {
  const dispatch = useDispatch();
  const data = _data as IData;
  const gamesAmount = useSelector(selectGamesAmount);
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

  return (
    <>
      <Header
        username={username}
        setUsername={setUsername}
        setLoggedIn={setLoggedIn}
      />
      <div className="container">
        {/* GameList */}
        <GameList data={data} />
        
        {/* Search & filters */}
        <div className={`filtersContainer ${isMenuOpen && "positionMenu"}`}>
          <SearchInput />
          <Providers options={data.providers} />
          <Groups options={data.groups} />
          <Sorting />
          <Slider />
          <div
            className={`resetFiltersContainer ${!isMenuOpen && "resetClosed"}`}
          >
            <span>Games amount: {gamesAmount}</span>
            <Button title="Reset" onClick={() => dispatch(resetFilter())} />
          </div>
          <button
            className="filtersMenu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img src={menu} alt="Menu Icon" />
            <span>{isMenuOpen ? "Hide" : "Show"} filters</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
