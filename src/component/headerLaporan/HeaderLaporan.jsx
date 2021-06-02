// css
import style from "./HeaderLaporan.module.css";

// gambar
import calender from "../../asset/img/calendar.svg";
import { useState } from "react";

const HeaderLaporan = () => {
  let [dropdownEkspor, setdropdownEkspor] = useState("");

  const handleEkspor = () => {
    if (dropdownEkspor === "") return setdropdownEkspor(style.dropdownEksporActive);
    setdropdownEkspor("");
  };

  return (
    <div className={style.customContainer}>
      <div className={`${style.tgl} ms-4 `}>
        <p>Tanggal Awal</p>
        <div className={style.containerTgl + " pb-2"}>
          <p>22-05-2021</p>
          <div className={style.boxCalender}>
            <img src={calender} alt="" />
          </div>
        </div>
      </div>
      <div className={`${style.tgl} ms-4 `}>
        <p>Tanggal Awal</p>
        <div className={style.containerTgl + " pb-2"}>
          <p>22-05-2021</p>
          <div className={style.boxCalender}>
            <img src={calender} alt="" />
          </div>
        </div>
      </div>
      <div className={style.btnEkspor + " me-4"}>
        <div className={style.boxBtn} onClick={() => handleEkspor()}>
          <span>Ekspor</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill ms-2" viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </div>
        <div className={`${style.dropdownEkspor} ${dropdownEkspor}`}>
          <ul>
            <li>PDF</li>
            <li>XLS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderLaporan;
