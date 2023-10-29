import React, { useState } from "react";
import s from "./Settings.module.css";
import cn from "classnames";
import { useParams } from "react-router-dom";
import BtnMenu from "../../components/btnMenu/BtnMenu";
import PopupMenu from "../../components/popupMenu/PopupMenu";

const Settings = () => {
  const params = useParams();
  const [popupMenuVisible, setPopupMenuVisible] = useState(false);

  const handlePopupMenu = () => {
    setPopupMenuVisible(!popupMenuVisible);
  };

  return (
    <div className={s.main}>
      <BtnMenu handlePopupMenu={handlePopupMenu} />
      <PopupMenu visible={popupMenuVisible} />

      <p className={s.id}>{params.id}</p>
      <div className={s.accessCnt}>
        <p className={s.accessText}>Доступ:</p>
        <div className={s.checkboxWrapper6}>
          <input
            className={cn(s.tgl, s.tglLight)}
            id="cb1-6"
            type="checkbox"
            checked={true}
          />
          <label className={s.tglBtn} for="cb1-6" />
        </div>
      </div>
      <div className={s.keyCnt}>
        <p className={s.keyText}>Ключ:</p>
        <input className={s.keyInput} type="number" placeholder="234117" />
      </div>
      <button className={s.btn} type="button">
        Сохранить
      </button>
    </div>
  );
};

export default Settings;
