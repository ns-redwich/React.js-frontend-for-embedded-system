import React from "react";
import s from "./Elem.module.css";
import cn from "classnames";
import { Link } from "react-router-dom";

const Elem = (props) => {
  return (
    <Link
      to={`/settings/${3}`}
      className={cn(s.el, {
        [s.available]: props.available,
        [s.notAvailable]: props.available == false,
      })}
    >
      1
    </Link>
  );
};

export default Elem;
