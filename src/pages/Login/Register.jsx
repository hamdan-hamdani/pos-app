// css
import style from "./Style.module.css";

// library
import { useHistory } from "react-router";
import { useState } from "react";
import axios from "axios";

// component
import Input from "../../component/input/Input";
import Button from "../../component/button/Button";

const Register = () => {
  let [email, setEmail] = useState("");
  let [emailBenar, setEmailBenar] = useState(style.emailBenar);
  let [password, setPassword] = useState("");
  let [passwordBenar, setPasswordBenar] = useState(style.emailBenar);
  let [noHp, setNoHp] = useState("");
  let [noHpBenar, setNoHpBenar] = useState(style.emailBenar);
  const history = useHistory();

  const pushData = (data) => {
    axios
      .post("http://localhost:3004/users", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const handleOnChange = (e, type) => {
    setEmailBenar(style.emailBenar);
    setPasswordBenar(style.emailBenar);
    setNoHpBenar(style.emailBenar);
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
    } else {
      const pattern = /^[0-9]{12,12}$/;

      if (!e.target.value.match(pattern)) {
        return setNoHpBenar(style.emailSalah);
      }
      return setNoHp(e.target.value);
    }
  };

  const handleRegister = () => {
    const data = {
      email,
      password,
      noHp,
    };
    if (email === "") {
      return alert("email tidak boleh kosong");
    }
    if (password === "") {
      return alert("password tidak boleh kosong");
    }
    if (noHp === "") return alert("no hp tidak boleh kosong");
    console.log("dijalankan");

    pushData(data);
  };

  const handleLogin = () => {
    history.push("/login");
  };

  return (
    <div>
      <div className={`container ${style.customContainer} mt-4`}>
        <h1 className={style.h1}>Register</h1>
        <div>
          <Input onChange={(e) => handleOnChange(e, "email")} type="email" data={{ id: "1", label: "Username" }} placeholder="Masukan Email" />
          <p className={emailBenar}>Format email salah Contoh xyz@gmail.com</p>
        </div>
        <div className={`mt-4`}>
          <Input onChange={(e) => handleOnChange(e, "password")} data={{ id: "2", label: "Password" }} type="password" placeholder="Masukan Password" />
          <p className={passwordBenar}>Minimal 8 karakter dan harus mengandung huruf kecil, besar dan nomor</p>
        </div>
        <div className={`mt-4`}>
          <Input onChange={(e) => handleOnChange(e, "noHp")} data={{ id: "3", label: "No Hp" }} type="tel" placeholder="Masukan No.Hp" />
          <p className={noHpBenar}>Hanya boleh angka dan 12 karakter</p>
        </div>
        <div className={`mt-4 ${style.boxButton}`} onClick={() => handleRegister()}>
          <Button textButton="Register" />
        </div>
        <p className={`mt-4 text-center`}>
          Sudah punya akun?{" "}
          <span onClick={() => handleLogin()} className={style.span}>
            Klik disini
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
