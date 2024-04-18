import logo from "../../assets/logo.svg";
import profileIcon from "../../assets/icons__profile_16px.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./styles/Header.css";

interface IHeaderProps {
  username: string;
  setUsername: (value: ((prevState: string) => string) | string) => void;
  setLoggedIn: (value: ((prevState: boolean) => boolean) | boolean) => void;
}

const Header = ({ username, setUsername, setLoggedIn }: IHeaderProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch("/api/user");
      if (res.status === 200) {
        const data = await res.json();
        setUsername(data.username);
        setLoggedIn(true);
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const logOut = async () => {
    try {
      const res = await fetch("/api/logout");

      if (res.status === 200) {
        setUsername("");
        setLoggedIn(false);
        navigate("/login");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="header">
      <img src={logo} alt="Logo" />
      <div className="headerProfile">
        <span>{username}</span>
        <button onClick={logOut}>
          <img src={profileIcon} alt="User icon" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
