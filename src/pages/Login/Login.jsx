// css
import style from "./Style.module.css";

// library
import { useHistory } from "react-router";
import { useState } from "react";
import axios from "axios";

// component
import Input from "../../component/input/Input";
import Button from "../../component/button/Button";
import useAuth from "../ProvideAuth/UseAuth";

const Login = () => {
  const history = useHistory();
  const auth = useAuth();
  let [email, setEmail] = useState("");
  let [emailBenar, setEmailBenar] = useState(style.emailBenar);
  let [password, setPassword] = useState("");
  let [passwordBenar, setPasswordBenar] = useState(style.emailBenar);

  const getData = (data) => {
    axios
      .get("http://localhost:3004/users")
      .then((res) => {
        const result = res.data.map((item) => item.email === data.email && item.password === data.password);
        if (result[0]) return history.push("/masukan-produk");
        alert("Email atau password salah");
        console.log(res.data);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOnChange = (e, type) => {
    setEmailBenar(style.emailBenar);
    setPasswordBenar(style.emailBenar);

    if (type === "email") {
      const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;

      if (!e.target.value.match(pattern)) {
        return setEmailBenar(style.emailSalah);
      }
      return setEmail(e.target.value);
    } else if (type === "password") {
      const pattern = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

      if (!e.target.value.match(pattern)) {
        return setPasswordBenar(style.emailSalah);
      }
      return setPassword(e.target.value);
    }
  };

  const handleLogin = () => {
    const data = {
      email,
      password,
    };
    if (email === "") {
      return alert("email tidak boleh kosong");
    }
    if (password === "") {
      return alert("password tidak boleh kosong");
    }
    auth.setUser(email);
    getData(data);
  };

  const handleRegister = () => {
    history.push("/register");
  };
  return (
    <div>
      <div className={`container ${style.customContainer} mt-4`}>
        <h1 className={style.h1}>Login</h1>
        <div>
          <Input onChange={(e) => handleOnChange(e, "email")} data={{ id: "1", label: "Username" }} placeholder="Masukan Email" />
          <p className={emailBenar}>Format email salah Contoh xyz@gmail.com</p>
        </div>
        <div className={`mt-4`}>
          <Input onChange={(e) => handleOnChange(e, "password")} data={{ id: "2", label: "Password" }} type="password" placeholder="Masukan Password" />
          <p className={passwordBenar}>Minimal 8 karakter dan harus mengandung huruf kecil, besar dan nomor</p>
        </div>
        <div className={`mt-4 ${style.boxButton}`} onClick={() => handleLogin()}>
          <Button textButton="Login" />
        </div>
        <p className={`mt-4 text-center`}>
          Belum punya akun?{" "}
          <span onClick={() => handleRegister()} className={style.span}>
            Klik disini
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
