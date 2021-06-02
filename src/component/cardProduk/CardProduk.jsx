// css
import style from "./CardProduk.module.css";

// gambar
import produk1 from "../../asset/img/produk/eaters-collective-pLKgCsBOiw4-unsplash.jpg";

// component
import Input from "../input/Input";
import Qty from "../qty/Qty";
import Label from "../input/Label";
import Button from "../button/Button";

const CardProduk = ({ textButton }) => {
  return (
    <div className={style.containerCustom}>
      <div className={`${style.asideProduk}`}>
        <div className={`${style.boxImage}`}>
          <img src={produk1} alt="" />
        </div>
      </div>
      <div className={`${style.itemProduk}`}>
        <div>
          <Label data={{ id: "1", label: "Nama Produk" }} />
          <Input data={{ id: "1" }} placeholder="Masukan Nama Produk" className="secondaryInput" />
        </div>
        <div className={`mt-3`}>
          <Label data={{ id: "2", label: "Harga Produk" }} />
          <Input data={{ id: "2" }} placeholder="Masukan Harga Produk" className="secondaryInput" />
        </div>
        <div className={`${style.containerQty} mt-3 mb-3`}>
          <Qty />
          <span className={style.span}>Jumlah Produk</span>
        </div>
        <Label data={{ id: "3", label: "Deskripsi Produk" }} />
        <textarea placeholder="Masukan deskripsi produk" className={style.textarea} id="3"></textarea>
        <div className={style.boxButton}>
          <div className={`${style.containerButton}`}>
            <Button textButton={textButton} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduk;
