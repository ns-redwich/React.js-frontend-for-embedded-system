import React from "react";
import s from "./EventsList.module.css";
import cn from "classnames";

const EventsList = () => {
  return (
    <div className={s.list}>
      <div className={s.col}>
        <p className={s.colText}>20 окт. 2023</p>
        <p className={s.colText}>19 окт. 2023</p>
        <p className={s.colText}>18 окт. 2023</p>
      </div>
      <div className={s.col}>
        <p className={s.colText}>21 : 15</p>
        <p className={s.colText}>14 : 30</p>
        <p className={s.colText}>15 : 00</p>
      </div>
      <div className={s.col}>
        <p
          className={cn(s.colKey, {
            [s.colIdAvailable]: true,
          })}
        >
          4
        </p>
        <p
          className={cn(s.colKey, {
            [s.colIdNotAvailable]: true,
          })}
        >
          69
        </p>
        <p className={cn(s.colKey)}>20169823</p>
      </div>
    </div>
  );
};

export default EventsList;
