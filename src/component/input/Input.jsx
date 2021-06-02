// css
import style from "./Input.module.css";

const initialProps = { id: "", label: "USer" };

const Input = ({ data = initialProps, type = "text", placeholder = "", className, onChange }) => {
  const handleChange = (e) => {
    onChange(e);
  };
  return (
    <div>
      <input
        required
        onKeyUp={(e) => handleChange(e)}
        className={`${className === "secondaryInput" ? style.secondaryInput : className === "inputQty" ? style.inputQty : className === "inputAddCard" ? style.inputAddCard : style.primaryInput}`}
        type={type}
        placeholder={placeholder}
        id={data.id}
      />
    </div>
  );
};

export default Input;
