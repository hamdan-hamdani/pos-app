// css
import style from "../MasukanProduk.module.css";

// component
import SideMenu from "../../../component/sideMenu/SideMenu";
import Header from "../../../component/header/Header";
import CardProduk from "../../../component/cardProduk/CardProduk";
import Input from "../../../component/input/Input";

const MasukanProduk = () => {
  return (
    <div>
      <div className={style.containerCustom}>
        <SideMenu />
        <Header title="Masukan Produkmu" />
        <div className={style.card}>
          <CardProduk textButton="Simpan" />
        </div>
        <div className={style.addCard}>
          <Input data={{ id: "11" }} placeholder="1" className="inputAddCard" />
          <span>Tambah Card Produk</span>
        </div>
      </div>
    </div>
  );
};

export default MasukanProduk;
