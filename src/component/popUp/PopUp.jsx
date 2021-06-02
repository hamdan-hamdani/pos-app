// css
import Button from "../button/Button";
import style from "./PopUp.module.css";

// gambar
import sad from "../../asset/img/sad-face-in-rounded-square.svg";

// component
import useAuth from "../../pages/ProvideAuth/UseAuth";

const PopUp = ({ popUp, popUpActiv, handleLogout }) => {
  const auth = useAuth();
  const handleYa = () => {
    handleLogout(PopUp);
    auth.setUser(null);
  };

  const handleTidak = () => {
    handleLogout(popUpActiv);
  };

  return (
    <div className={style.containerCustom}>
      <div className={style.boxKonten}>
        <p>Anda yakin ingin keluar?</p>
        <div className={style.containerImg}>
          <div className={style.boxImg + " mt-3"}>
            <img src={sad} alt="" />
          </div>
        </div>
        <div className={style.boxButton + " mt-3"}>
          <div className="me-3" onClick={() => handleYa()}>
            <Button textButton="Ya" />
          </div>
          <div onClick={() => handleTidak()}>
            <Button textButton="Tidak" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
