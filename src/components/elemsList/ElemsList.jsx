import React from "react";
import s from "./ElemsList.module.css";
import Elem from "./elem/Elem";

const ElemsList = () => {
  return (
    <div className={s.list}>
      <Elem available={true} />
      <Elem available={true} />
      <Elem available={false} />
    </div>
  );
};

export default ElemsList;
