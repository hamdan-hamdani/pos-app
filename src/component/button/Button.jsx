import "./Button.css";
const Button = ({ classButton = "default-class", textButton }) => {
  return <div className={classButton}>{textButton}</div>;
};

export default Button;
