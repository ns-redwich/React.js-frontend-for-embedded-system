import React from "react";
import s from "./PopupMenu.module.css";
import { Link } from "react-router-dom";

const PopupMenu = (props) => {
  return (
    <div
      className={s.main}
      style={{ display: props.visible ? "flex" : "none" }}
    >
      <Link className={s.link} to={"/"}>
        Главная
      </Link>
      <Link className={s.link} to={"/events"}>
        Журнал событий
      </Link>
    </div>
  );
};

export default PopupMenu;
