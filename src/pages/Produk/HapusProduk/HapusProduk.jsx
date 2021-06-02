// css
import style from "../MasukanProduk.module.css";
import styleHapus from "../MasukanProduk.module.css";

// component
import SideMenu from "../../../component/sideMenu/SideMenu";
import Header from "../../../component/header/Header";
import CardProduk from "../../../component/cardProduk/CardProduk";

const HapusProduk = () => {
  return (
    <div>
      <div className={styleHapus.containerCustom}>
        <SideMenu />
        <Header title="Hapus Produkmu" />
        <div className={style.card}>
          <CardProduk textButton="Hapus" />
        </div>
      </div>
    </div>
  );
};

export default HapusProduk;
