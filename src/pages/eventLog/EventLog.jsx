import React, { useState } from "react";
import s from "./EventLog.module.css";
import EventsList from "../../components/eventsList/EventsList";
import BtnMenu from "../../components/btnMenu/BtnMenu";
import PopupMenu from "../../components/popupMenu/PopupMenu";

const EventLog = () => {
  const [popupMenuVisible, setPopupMenuVisible] = useState(false);

  const handlePopupMenu = () => {
    setPopupMenuVisible(!popupMenuVisible);
  };

  return (
    <div className={s.main}>
      <BtnMenu handlePopupMenu={handlePopupMenu} />
      <PopupMenu visible={popupMenuVisible} />
      <h1 className={s.title}>Журнал событий</h1>
      <EventsList />
    </div>
  );
};

export default EventLog;
