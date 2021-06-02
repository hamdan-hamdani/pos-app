// css
import style from "../Laporan.module.css";
import styleStokBarang from "./StokBarang.module.css";

// gambar
import produk1 from "../../../asset/img/produk/annie-spratt-oT7_v-I0hHg-unsplash.jpg";
import produk2 from "../../../asset/img/produk/eaters-collective-pLKgCsBOiw4-unsplash.jpg";
import produk3 from "../../../asset/img/produk/ke-vin-nwmZhwOSVnM-unsplash.jpg";
import produk4 from "../../../asset/img/produk/tsering-pemba-_ccJa73HR2I-unsplash.jpg";
import searcIcon from "../../../asset/img/searchIcon.svg";

// component
import SideMenu from "../../../component/sideMenu/SideMenu";

const StokBarang = () => {
  return (
    <div>
      <div className={styleStokBarang.containerCustom}>
        <SideMenu />
        <div className={styleStokBarang.header}>
          <div className={styleStokBarang.boxSearch}>
            <div className={styleStokBarang.boxInputIcon}>
              <input className={styleStokBarang.inpSearch} type="text" placeholder="cari barang" />
              <div className={styleStokBarang.boxSearchIcon}>
                <img src={searcIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.containerCardCustom + " pb-3"}>
            <header className={style.headerCard + " p-3"}>
              <span>Stok Barang</span>
            </header>
            <div className={style.konten + " ps-3 pe-3 "}>
              <div className={styleStokBarang.deskripsi + " p-3 mt-3"}>
                <div className={styleStokBarang.boxImage}>
                  <img src={produk1} alt="" />
                </div>
                <div className={styleStokBarang.desripsiProduk + " ps-3"}>
                  <p>Ayam Geprek</p>
                  <p>Stok 12</p>
                </div>
              </div>
              <div className={styleStokBarang.deskripsi + " p-3 mt-3"}>
                <div className={styleStokBarang.boxImage}>
                  <img src={produk2} alt="" />
                </div>
                <div className={styleStokBarang.desripsiProduk + " ps-3"}>
                  <p>Ayam Geprek</p>
                  <p>Stok 12</p>
                </div>
              </div>
              <div className={styleStokBarang.deskripsi + " p-3 mt-3"}>
                <div className={styleStokBarang.boxImage}>
                  <img src={produk3} alt="" />
                </div>
                <div className={styleStokBarang.desripsiProduk + " ps-3"}>
                  <p>Ayam Geprek</p>
                  <p>Stok 12</p>
                </div>
              </div>
              <div className={styleStokBarang.deskripsi + " p-3 mt-3"}>
                <div className={styleStokBarang.boxImage}>
                  <img src={produk4} alt="" />
                </div>
                <div className={styleStokBarang.desripsiProduk + " ps-3"}>
                  <p>Ayam Geprek</p>
                  <p>Stok 12</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StokBarang;
