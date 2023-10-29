import React, { useState } from "react";
import s from "./Elements.module.css";
import ElemsList from "../../components/elemsList/ElemsList";
import BtnMenu from "../../components/btnMenu/BtnMenu";
import PopupMenu from "../../components/popupMenu/PopupMenu";

const Elements = () => {
  const [popupMenuVisible, setPopupMenuVisible] = useState(false);

  const handlePopupMenu = () => {
    setPopupMenuVisible(!popupMenuVisible);
  };

  return (
    <div className={s.main}>
      <BtnMenu handlePopupMenu={handlePopupMenu} />
      <PopupMenu visible={popupMenuVisible} />
      <ElemsList />
    </div>
  );
};

export default Elements;
