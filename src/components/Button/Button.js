import "./Button.css";

const Button = (props) => {
  return (
    <button className={"btn btn--" + props.color}>
      {props.children}
    </button>
  );
};

export default Button;
