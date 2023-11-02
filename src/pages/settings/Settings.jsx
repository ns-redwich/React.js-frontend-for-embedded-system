import React, { useState } from "react";
import s from "./Settings.module.css";
import cn from "classnames";
import { Navigate, useParams } from "react-router-dom";
import BtnMenu from "../../components/btnMenu/BtnMenu";
import PopupMenu from "../../components/popupMenu/PopupMenu";
import axios from "axios";

const Settings = () => {
  const params = useParams();
  const [popupMenuVisible, setPopupMenuVisible] = useState(false);
  const [checked, setChecked] = useState(params.access == 1 ? true : false);
  const [key, setKey] = useState(params.key);

  const handlePopupMenu = () => {
    setPopupMenuVisible(!popupMenuVisible);
  };

  const handleCheckbox = () => {
    setChecked(!checked);
  };

  const changeKey = (e) => {
    setKey(e.target.value);
  };

  function getCurrentDateInFormat() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const monthNames = [
      "янв",
      "фев",
      "мар",
      "апр",
      "май",
      "июн",
      "июл",
      "авг",
      "сен",
      "окт",
      "ноя",
      "дек",
    ];
    const month = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    return `${day} ${month}. ${year}`;
  }

  function getCurrentTimeInFormat() {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    // Ensure two-digit format for hours and minutes
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedHours} : ${formattedMinutes}`;
  }

  const submitData = () => {
    try {
      axios
        .post("http://localhost:8000/elem", {
          date: getCurrentDateInFormat(),
          time: getCurrentTimeInFormat(),
          id: Number(params.id),
          access: checked ? 1 : 0,
          key: key,
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
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
            onChange={handleCheckbox}
            className={cn(s.tgl, s.tglLight)}
            id="cb1-6"
            type="checkbox"
            checked={checked}
          />
          <label className={s.tglBtn} htmlFor="cb1-6" />
        </div>
      </div>
      <div className={s.keyCnt}>
        <p className={s.keyText}>Ключ:</p>
        <input
          onChange={changeKey}
          className={s.keyInput}
          value={key}
          type="number"
          placeholder="234117"
        />
      </div>
      <button onClick={submitData} className={s.btn} type="button">
        Сохранить
      </button>
    </div>
  );
};

export default Settings;
