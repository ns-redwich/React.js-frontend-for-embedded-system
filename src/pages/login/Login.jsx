import React, { useState } from "react";
import s from "./Login.module.css";
import axios from "axios";

const Login = (props) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const changeLogin = (e) => {
    setLogin(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const submitData = () => {
    axios
      .post("http://localhost:8000/auth", {
        login: login,
        password: password,
      })
      .then((response) => {
        if (response.data.authorized === true) {
          props.setIsAuth(true);
        } else {
          props.setIsAuth(false);
        }
      })
      .catch((err) => console.log(err));

    setLogin("");
    setPassword("");
  };

  return (
    <div className={s.main}>
      <h1 className={s.title}>Авторизация</h1>
      <form className={s.form}>
        <input
          onChange={changeLogin}
          className={s.input}
          value={login}
          type="text"
          placeholder="login"
        />
        <input
          onChange={changePassword}
          className={s.input}
          value={password}
          type="password"
          placeholder="password"
        />
        <button onClick={submitData} type="button" className={s.btn}>
          Войти
        </button>
      </form>
    </div>
  );
};

export default Login;
