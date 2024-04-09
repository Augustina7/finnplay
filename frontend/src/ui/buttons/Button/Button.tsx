import "./styles/Button.css";

const Button = (props: { title: string; onClick: () => void }) => {
  return (
    <button onClick={props.onClick} className="customButton">
      <span>{props.title}</span>
    </button>
  );
};

export default Button;
