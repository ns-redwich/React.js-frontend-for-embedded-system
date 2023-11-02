import React, { useEffect, useState } from "react";
import s from "./ElemsList.module.css";
import Elem from "./elem/Elem";
import axios from "axios";

const ElemsList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/elems")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={s.list}>
      {data &&
        data.map((item) => {
          return (
            <Elem
              key={item.id}
              elementKey={item.key}
              id={item.id}
              available={item.access === 1 ? true : false}
            />
          );
        })}
    </div>
  );
};

export default ElemsList;
