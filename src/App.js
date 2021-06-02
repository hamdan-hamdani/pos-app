// css
import "./App.css";

// component
import HomePages from "./pages/HomePages/HomePages";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import MasukanProduk from "./pages/Produk/MasukanProduk/MasukanProduk";
import UpdateProduk from "./pages/Produk/UpdateProduk/UpdateProduk";
import HapusProduk from "./pages/Produk/HapusProduk/HapusProduk";
import LaporanKeuangan from "./pages/Laporan/LaporanKeuangan/LaporanKeuangan";

// library
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DataTransaksi from "./pages/Laporan/DataTransaksi/DataTransaksi";
import StokBarang from "./pages/Laporan/StokBarang/StokBarang";
import Profil from "./pages/Profil/Profil";
import ProvideAuth from "./pages/ProvideAuth/ProvideAuth";
import PrivateRoute from "./pages/ProvideAuth/PrivateRoute";

function App() {
  return (
    <ProvideAuth>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/profil">
              <Profil />
            </Route>
            <Route path="/stok-barang">
              <StokBarang />
            </Route>
            <Route path="/data-transaksi">
              <DataTransaksi />
            </Route>
            <Route path="/laporan-keuangan">
              <LaporanKeuangan />
            </Route>
            <PrivateRoute path="/hapus-produk">
              <HapusProduk />
            </PrivateRoute>
            <PrivateRoute path="/update-produk">
              <UpdateProduk />
            </PrivateRoute>
            <PrivateRoute path="/masukan-produk">
              <MasukanProduk />
            </PrivateRoute>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <HomePages />
            </Route>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}

export default App;
