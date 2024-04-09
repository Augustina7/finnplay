import { Dispatch, SetStateAction } from "react";
import LoginForm from "../components/LoginForm/LoginForm";

export interface ILoginProps {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const Login: React.FC<ILoginProps> = ({
  username,
  setUsername,
  setLoggedIn,
}) => {
  return (
    <div className={"mainContainer"}>
      <LoginForm
        setUsername={setUsername}
        setLoggedIn={setLoggedIn}
        username={username}
      />
    </div>
  );
};

export default Login;
