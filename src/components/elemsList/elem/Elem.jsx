import React from "react";
import s from "./Elem.module.css";
import cn from "classnames";
import { Link } from "react-router-dom";

const Elem = (props) => {
  const access = props.available ? 1 : 0;

  return (
    <Link
      to={`/settings/${props.id}/${access}/${props.elementKey}`}
      className={cn(s.el, {
        [s.available]: props.available,
        [s.notAvailable]: props.available == false,
      })}
    >
      {props.id}
    </Link>
  );
};

export default Elem;
