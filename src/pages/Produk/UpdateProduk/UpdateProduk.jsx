// css
import style from "../MasukanProduk.module.css";
import styleUpdate from "./UpdateProduk.module.css";

// component
import SideMenu from "../../../component/sideMenu/SideMenu";
import Header from "../../../component/header/Header";
import CardProduk from "../../../component/cardProduk/CardProduk";

const UpdateProduk = () => {
  return (
    <div>
      <div className={styleUpdate.containerCustom}>
        <SideMenu />
        <Header title="Update Produkmu" />
        <div className={style.card}>
          <CardProduk textButton="Update" />
        </div>
      </div>
    </div>
  );
};

export default UpdateProduk;
