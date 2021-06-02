// css
import style from "./SideMenu.module.css";

// gambar
import list from "../../asset/img/list.svg";
import listProduk from "../../asset/img/listProduk.svg";
import dashboard from "../../asset/img/dashboard.svg";
import user from "../../asset/img/user.svg";
import logout from "../../asset/img/logout.svg";

// library
import { useState } from "react";
import { useHistory } from "react-router";
import PopUp from "../popUp/PopUp";

const SideMenu = () => {
  const history = useHistory();
  let [dropdownProdukActiv, setDropdownProdukActiv] = useState("");
  let [dropdownLaporanActiv, setDropdownLaporanActiv] = useState("");
  let [popUpActiv, setPopUpActiv] = useState("");

  const handleDropdownProduk = () => {
    dropdownProdukActiv === "" ? setDropdownProdukActiv(`${style.dropdownProdukActiv}`) : setDropdownProdukActiv("");
  };

  const handleDropdownLaporan = () => {
    dropdownLaporanActiv === "" ? setDropdownLaporanActiv(`${style.dropdownLaporanActiv}`) : setDropdownLaporanActiv("");
  };

  const handlePush = (linkPush) => {
    history.push(linkPush);
  };

  const handleLogout = () => {
    popUpActiv === "" ? setPopUpActiv(style.setPopUpActiv) : setPopUpActiv("");
  };

  const popUpLogout = (valueLogout) => {
    popUpActiv === "" ? setPopUpActiv(valueLogout) : setPopUpActiv("");
  };

  return (
    <div className={style.sideMenu}>
      <div className={style.listMenu + " mt-4"}>
        <div className={style.boxListMenu}>
          <img src={list} alt="" />
        </div>
        <span>POST APP</span>
      </div>
      <div className={style.listMenu + " mt-4"} onClick={() => handleDropdownProduk()}>
        <div className={style.boxListMenu}>
          <img src={listProduk} alt="" />
        </div>
        <span>Produk</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`${style.iconDropdown} bi bi-caret-down-fill`} viewBox="0 0 16 16">
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
      </div>
      <div className={`${style.dropdownProduk} ${dropdownProdukActiv}`}>
        <ul>
          <li onClick={() => handlePush("/masukan-produk")}>Masukan Produk</li>
          <li onClick={() => handlePush("/update-produk")}>Update Produk</li>
          <li onClick={() => handlePush("/hapus-produk")}>Hapus Produk</li>
        </ul>
      </div>
      <div className={style.listMenu + " mt-4"} onClick={() => handleDropdownLaporan()}>
        <div className={style.boxListMenu}>
          <img src={dashboard} alt="" />
        </div>
        <span>Dashboard</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`${style.iconDropdown} bi bi-caret-down-fill`} viewBox="0 0 16 16">
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
      </div>
      <div className={`${style.dropdownLaporan} ${dropdownLaporanActiv}`}>
        <ul>
          <li onClick={() => handlePush("/laporan-keuangan")}>Laporan Keuangan</li>
          <li onClick={() => handlePush("/data-transaksi")}>Data Transaksi</li>
          <li onClick={() => handlePush("/stok-barang")}>Stok Barang</li>
        </ul>
      </div>
      <div className={style.listMenu + " mt-4"} onClick={() => handlePush("/profil")}>
        <div className={style.boxListMenu}>
          <img src={user} alt="" />
        </div>
        <span>User</span>
      </div>
      <div className={style.listMenu + " mt-4"} onClick={() => handleLogout()}>
        <div className={style.boxListMenu}>
          <img src={logout} alt="" />
        </div>
        <span>Logout</span>
      </div>
      <div className={`${style.popUp} ${popUpActiv} `}>
        <PopUp popUp={style.popUp} popUpActiv={popUpActiv} handleLogout={(valueLogout) => popUpLogout(valueLogout)} />
      </div>
    </div>
  );
};

export default SideMenu;
