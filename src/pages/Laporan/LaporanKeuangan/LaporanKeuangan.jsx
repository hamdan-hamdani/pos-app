// css
import style from "../Laporan.module.css";
// import styleLaporan from "./LaporanKeuangan.module.css";

// component
import SideMenu from "../../../component/sideMenu/SideMenu";
import HeaderLaporan from "../../../component/headerLaporan/HeaderLaporan";
import CardLaporan from "../../../component/cardLaporan/CardLaporan";

const MasukanProduk = () => {
  return (
    <div>
      <div className={style.containerCustom}>
        <SideMenu />
        <HeaderLaporan />
        <div className={style.card}>
          <CardLaporan title="Akun & Kategori" date="22-05-2021" />
        </div>
      </div>
    </div>
  );
};

export default MasukanProduk;
