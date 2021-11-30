import React, { useState, useEffect } from "react";
import s from "./Card.module.css";
import Loader from "../loader/Loader";

export default function Card() {
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  const randomObj = {
    title: "Click",
    when: "Today",
    percentage: "0",
    number: "0",
    itemList: [
      {
        title: "Yesterday",
        value: 0,
      },
      {
        when: "Yesterday",
        number: 0,
      },
      {
        when: "Yesterday",
        number: 0,
      },
    ],
  };

  return (
    <div className={s.cardWrapper}>
      <div className={s.card}>
        {isLoading && <Loader />}
        <div style={{ opacity: isLoading ? "0" : "1" }}>
          <div className={s.cardHeader}>
            <div className={s.headerWrapper}>
              <div className={s.cardTitle}>
                <h4>{randomObj.title}</h4>
                <small className={s.textMuted}>{randomObj.when}</small>
              </div>
              <div className={`${s.badgeSuccess} ${s.badge}`}>
                {randomObj.percentage}%
              </div>
            </div>
          </div>
          <div className={s.cardBody}>
            <h2>{randomObj.number}</h2>
            {randomObj.parameters.map((param) => (
              <div className={s.cardBottomRow}>
                <small className={s.textMuted}>{param.when}</small>
                <h6 className={s.valueHolder} data-custom="yesterday">
                  {param.number}
                </h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
