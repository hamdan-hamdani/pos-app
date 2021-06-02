// css
import style from "../Laporan.module.css";

// component
import SideMenu from "../../../component/sideMenu/SideMenu";
import HeaderLaporan from "../../../component/headerLaporan/HeaderLaporan";

const DataTransaksi = () => {
  return (
    <div>
      <div className={style.containerCustom}>
        <SideMenu />
        <HeaderLaporan />
        <div className={style.card}>
          <div className={style.containerCardCustom + " pb-3"}>
            <header className={style.headerCard + " p-3"}>
              <span>Data Transaksi</span>
              <span>22-09-2021</span>
            </header>
            <div className={style.konten + " ps-3 pe-3 "}>
              <div className={style.deskripsi}>
                <ul>
                  <li className={style.headerKonten}>No</li>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                </ul>
              </div>
              <div className={style.deskripsi}>
                <ul>
                  <li className={style.headerKonten}>Nama Barang</li>
                  <li>Ayam Geprek</li>
                  <li>Nasi Bakar</li>
                  <li>Nasi Liwet</li>
                  <li>Ayam Suwir</li>
                </ul>
              </div>
              <div className={style.deskripsi}>
                <ul>
                  <li className={style.headerKonten}>Tanggal</li>
                  <li>12-07-2021</li>
                  <li>12-07-2021</li>
                  <li>12-07-2021</li>
                  <li>12-07-2021</li>
                </ul>
              </div>
              <div className={style.deskripsi}>
                <ul>
                  <li className={style.headerKonten}>Jumlah Bayar</li>
                  <li>Rp.15000</li>
                  <li>Rp.20000</li>
                  <li>Rp.25000</li>
                  <li>Rp.10000</li>
                </ul>
              </div>
            </div>
            <div className={style.total}>
              <p className={style.totalBayar}>Total Pembayaran</p>
              <p>Rp.70000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTransaksi;
