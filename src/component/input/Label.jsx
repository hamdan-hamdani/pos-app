// css
import style from "./Label.module.css";

const initialProps = { id: "", label: "USer" };

const Label = ({ data = initialProps }) => {
  return (
    <div>
      <label className={style.label} htmlFor={data.id}>
        {data.label}
      </label>
    </div>
  );
};

export default Label;
