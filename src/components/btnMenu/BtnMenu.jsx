import React from "react";
import s from "./BtnMenu.module.css";

const BtnMenu = (props) => {
  return (
    <div onClick={props.handlePopupMenu} className={s.btnMenu} type="button">
      <span className={s.btnMenuSpan}></span>
      <span className={s.btnMenuSpan}></span>
      <span className={s.btnMenuSpan}></span>
    </div>
  );
};

export default BtnMenu;
