import React, { useEffect, useState } from "react";
import s from "./EventsList.module.css";
import cn from "classnames";
import axios from "axios";

const EventsList = () => {
  const [log, setLog] = useState();

  useEffect(() => {
    axios.get("http://localhost:8000/log").then((response) => {
      setLog(response.data);
    });
  }, []);

  return (
    <div className={s.list}>
      <div className={s.col}>
        {log &&
          log.map((item) => {
            return (
              <p key={item.id} className={s.colText}>
                {item.date}
              </p>
            );
          })}
      </div>
      <div className={s.col}>
        {log &&
          log.map((item) => {
            return (
              <p key={item.id} className={s.colText}>
                {item.time}
              </p>
            );
          })}
      </div>
      <div className={s.col}>
        {log &&
          log.map((item) => {
            return (
              <p
                key={item.id}
                className={cn(s.colKey, {
                  [s.colIdAvailable]: item.access == 1,
                  [s.colIdNotAvailable]: item.access == 0,
                  [s.colKeyGhost]: item.identifier > 70 ? true : false,
                })}
              >
                {item.identifier}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default EventsList;
