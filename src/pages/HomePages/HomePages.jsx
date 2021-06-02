// css
import "./HomePages.css";

// gambar
import banner from "../../asset/img/Banner_Beepos-Software-Minimarket.jpg";
import laporanKeungan from "../../asset/img/lapkeu.jpg";
import dataTransaksi from "../../asset/img/data-transaksi.jpg";
import stokBarang from "../../asset/img/stok-barang.jpg";
import testimoniUser from "../../asset/img/testimoni-user.jpg";
import menu from "../../asset/img/list.svg";

// Component
import Card from "../../component/card/Card";
import Footer from "../../component/footer/Footer";

// library
import { useState } from "react";
import { useHistory } from "react-router";

const HomePages = () => {
  const history = useHistory();
  let [dropdownMenuActiv, setDropdownMenuActiv] = useState("");
  let [dropdownLayananActiv, setDropdownLayananActiv] = useState("");
  let [dropdownLayananActivMobile, setDropdownLayananActivMobile] = useState("");

  const handleDropDownMenu = () => {
    if (dropdownMenuActiv === "") return setDropdownMenuActiv("dropwdown-menu-active");
    setDropdownMenuActiv("");
  };

  const handleDropDownLayanan = () => {
    if (dropdownLayananActiv === "") return setDropdownLayananActiv("dropdown-layanan-activ");
    setDropdownLayananActiv("");
  };

  const handleDropDownLayananMobile = () => {
    if (dropdownLayananActivMobile === "") return setDropdownLayananActivMobile("dropdown-layanan-activ-mobile");
    setDropdownLayananActivMobile("");
  };

  const handlePush = (linkPush) => {
    history.push(linkPush);
  };

  return (
    <div>
      <div className="header mb-3">
        <div className="container container-custom">
          <div className="row row-custom">
            <div className="col-6 col-custom">
              <div className="logo">
                <p>APP POS</p>
              </div>
            </div>
            <div className="col col-custom col-layanan">
              <div className="layanan">
                <ul className="box-dropdown-layanan">
                  <li onClick={() => handleDropDownLayanan()}>
                    Layanan{" "}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                  </li>
                  <ul className={"dropdown-layanan " + dropdownLayananActiv}>
                    <li>
                      <a href="#lapKeuangan">Laporan Keuangan</a>
                    </li>
                    <li>
                      <a href="#dataTransaksi">Data Transaksi</a>
                    </li>
                    <li>
                      <a href="#cekStokBarang">Cek Stok Barang</a>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
            <div className="col col-custom">
              <div className="harga">
                <p>Harga</p>
              </div>
            </div>
            <div className="col col-custom">
              <div className="btn-register" onClick={() => handlePush("/register")}>
                <p>Register</p>
              </div>
            </div>
            <div className="col col-custom">
              <div className="btn-login" onClick={() => handlePush("/login")}>
                <p>Login</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-mobile">
        <div className="container container-custom">
          <div className="row row-custom">
            <div className="col-6">
              <div className="logo">
                <p>APP POS</p>
              </div>
            </div>
            <div className="col col-custom">
              <div className="menu">
                <div className="humburger-menu">
                  <img src={menu} alt="" onClick={() => handleDropDownMenu()} />
                </div>
              </div>
              <div className={"dropdown-menu " + dropdownMenuActiv}>
                <div className="layanan">
                  <ul>
                    <li onClick={() => handleDropDownLayananMobile()}>
                      Layanan{" "}
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                      </svg>
                    </li>
                    <ul className={"dropdown-layanan " + dropdownLayananActivMobile}>
                      <li>
                        <a href="#lapKeuangan">Laporan Keuangan</a>
                      </li>
                      <li>
                        <a href="#dataTransaksi">Data Transaksi</a>
                      </li>
                      <li>
                        <a href="#cekStokBarang">Cek Stok Barang</a>
                      </li>
                    </ul>
                    <li>Harga</li>
                    <li>
                      <div className="btn-register" onClick={() => handlePush("/register")}>
                        <p>Register</p>
                      </div>
                    </li>
                    <li>
                      <div className="btn-login" onClick={() => handlePush("/login")}>
                        <p>Login</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="carouselExampleIndicators" className="carousel carousel-custom slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={banner} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={banner} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="mt4">
        <div className="box-card" id="lapKeuangan">
          <Card push="/laporan-keuangan" img={laporanKeungan} data={{ title: "Laporan Keuangan", desc: "Tidak perlu repot lagi membuat laporan keuangan, Aplikasi pos akan membuatkan laporan keuangan untuk anda" }} />
        </div>
        <div className="box-card" id="dataTransaksi">
          <Card push="data-transaksi" className="box-img-order" img={dataTransaksi} data={{ title: "Data Transaksi", desc: "Aplikasi akan secara otomatis membuat data transaksi untuk anda" }} />
        </div>
        <div className="box-card" id="cekStokBarang">
          <Card push="stok-barang" img={stokBarang} data={{ title: "Cek Stok Barang", desc: "Tidak perlu repot lagi membuat laporan keuangan, Aplikasi pos akan membuatkan laporan keuangan untuk anda" }} />
        </div>
      </div>
      <div className="container mt4">
        <div id="carouselExampleIndicators" className="carousel carousel-custom slide testimonial" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="section-testi">
                <div>
                  <p>Aplikasi pos sangat membantu dalam memanage usaha saya sehingga membantu saya untuk mengembangkan usaha saya</p>
                  <p className="user-testimoni">Wina</p>
                </div>
              </div>
              <div className="section">
                <div className="box-img-testimoni">
                  <img src={testimoniUser} alt="" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="section-testi">
                <div>
                  <p>Aplikasi pos sangat membantu dalam memanage usaha saya sehingga membantu saya untuk mengembangkan usaha saya</p>
                  <p className="user-testimoni">Wina</p>
                </div>
              </div>
              <div className="section">
                <div className="box-img-testimoni">
                  <img src={testimoniUser} alt="" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="section-testi">
                <div>
                  <p>Aplikasi pos sangat membantu dalam memanage usaha saya sehingga membantu saya untuk mengembangkan usaha saya</p>
                  <p className="user-testimoni">Wina</p>
                </div>
              </div>
              <div className="section">
                <div className="box-img-testimoni">
                  <img src={testimoniUser} alt="" />
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="mt4">
        <Footer />
      </div>
    </div>
  );
};

export default HomePages;
