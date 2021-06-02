// css
import style from "./Profil.module.css";

// gambar
import profilImg from "../../asset/img/imageProfil.jpg";

// component
import SideMenu from "../../component/sideMenu/SideMenu";
import Header from "../../component/header/Header";

const Profil = () => {
  return (
    <div>
      <div className={style.containerCustom}>
        <SideMenu />
        <Header title="Profil" />
        <div className={style.card}>
          <div className={style.boxInfoUser}>
            <div className={style.boxImg}>
              <img src={profilImg} alt="" />
            </div>
          </div>
          <p>Wina</p>
          <p>0877176655</p>
          <p>wina@gmail.com</p>
          <div className={style.jenisKelamin}>
            <div className="boxLaki">
              <input className="me-2" type="radio" id="laki-laki" name="jenisKelamin" value="laki-laki" />
              <label htmlFor="laki-laki">Laki - Laki</label>
            </div>
            <div className="boxPerempuan ms-3">
              <input className="me-2" type="radio" id="perempuan" name="jenisKelamin" value="perempuan" />
              <label htmlFor="perempuan">Perempuan</label>
            </div>
          </div>
        </div>
        <div className={style.kontak + " ms-3 me-3"}>
          <p>Kontak</p>
          <label htmlFor="email" className="mt-2">
            Alamat Email
          </label>
          <br />
          <input className="mt-2" type="text" name="" id="email" defaultValue="wina@gmail.com" />
          <br />
          <label className="mt-2" htmlFor="noHp">
            No Hp
          </label>
          <br />
          <input className="mt-2" type="number" name="" id="noHp" defaultValue="087776665555" />
          <div className={style.containerButton + " mt-3"}>
            <div className={style.simpan + " ms-2 me-2  mt-2"}>
              <button>Simpan</button>
            </div>
            <div className={style.simpan + " ms-2 me-2  mt-2"}>
              <button>Edit Password</button>
            </div>
            <div className={style.simpan + " ms-2 me-2  mt-2"}>
              <button>Batal</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
