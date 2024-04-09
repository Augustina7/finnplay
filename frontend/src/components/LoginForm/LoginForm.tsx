import { useState } from "react";
import { useNavigate } from "react-router-dom";
import eyeIcon from "../../assets/icon-eye.svg";
import eyeClosedIcon from "../../assets/icon-hide.svg";
import loadingIcon from "../../assets/icons__spinner_14px.svg";
import { ILoginProps } from "../../pages/Login";
import logo from "../../assets/logo.svg";
import "./styles/LoginForm.css";

const LoginForm = ({ username, setUsername, setLoggedIn }: ILoginProps) => {
  const [password, setPassword] = useState("");
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [authError, setAuthError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onButtonClick = () => {
    setAuthError("");
    setUsernameError("");
    setPasswordError("");

    if (!username) {
      setUsernameError("Please enter your username");
      return;
    }

    if (!password) {
      setPasswordError("Please enter a password");
      return;
    }

    setLoading(true);
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Invalid username or password");
        }
      })
      .then((data) => {
        setUsername(username);
        setLoggedIn(true);
        navigate("/");
      })
      .catch((error) => {
        setAuthError("Invalid username or password");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className={"titleContainer"}>
        <img src={logo} alt="Logo" />
      </div>
      <div className="loginInputsContainer">
        <div className={"inputContainer"}>
          <input
            value={username}
            onFocus={() => setUsernameFocused(true)}
            onBlur={() => setUsernameFocused(!!username)}
            onChange={(ev) => setUsername(ev.target.value)}
            className={"inputBox"}
          />
          <label className={usernameFocused || username ? "shrink" : ""}>
            Login
          </label>
        </div>
        <label className="errorLabel">{usernameError}</label>
        <div className={"inputContainer"}>
          <input
            value={password}
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(!!password)}
            onChange={(ev) => setPassword(ev.target.value)}
            className={"inputBox"}
            type={showPassword ? "text" : "password"}
          />
          <label className={passwordFocused || password ? "shrink" : ""}>
            Password
          </label>
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="togglePasswordButton"
          >
            <img
              src={!showPassword ? eyeIcon : eyeClosedIcon}
              alt="Eye Icon"
              className="eyeIcon"
            />
          </button>
        </div>
        <label className="errorLabel">{passwordError}</label>
        <label className="errorLabel">{authError}</label>
      </div>
      <div className={"btnContainer"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={onButtonClick}
          value={loading ? "" : "Login"}
          disabled={loading}
        />
        {loading && (
          <img src={loadingIcon} alt="Loading" className="loadingIcon" />
        )}
      </div>
    </>
  );
};

export default LoginForm;
