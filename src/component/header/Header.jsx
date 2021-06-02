// css
import style from "./Header.module.css";

const Header = ({ title = "" }) => {
  return (
    <div className={style.customContainer}>
      <h1 className={style.title}>{title}</h1>
    </div>
  );
};

export default Header;
