// css
import style from "./CardLaporan.module.css";

const CardLaporan = ({ title = "", date = "" }) => {
  return (
    <div className={style.containerCustom}>
      <header className={style.header + " p-3"}>
        <span>{title}</span>
        <span>{date}</span>
      </header>
      <p className="p-3">Arus kas dari aktivitas operasional</p>
      <div className={style.konten + " ps-3 pe-3 "}>
        <div className={style.deskripsi}>
          <ul>
            <li>Penerimaan dari pelanggan</li>
            <li>Aset lancar lainnya</li>
            <li>Pembayaran ke pemasok</li>
            <li>Kartu kredit dan liabilitas jangka pendek lainnya</li>
            <li>Pendapatan lainnya</li>
            <li>Pengeluaran operasional</li>
          </ul>
        </div>
        <div className="harga">
          <ul>
            <li>Rp.100000</li>
            <li>Rp.0</li>
            <li>Rp.0</li>
            <li>Rp.0</li>
            <li>Rp.0</li>
            <li>Rp.0</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardLaporan;
