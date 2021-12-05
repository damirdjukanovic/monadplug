import React from "react";
import s from "./Card.module.css";

import CardWrapper from "../cardWrapper/CardWrapper";
import Loader from "../loader/Loader";

export default function Card(props) {
  const { data, isLoading } = props;

  const getPercentageColor = () => {
    if (data.percentage <= 30) return "#39da8a";
    if (data.percentage > 30 && data.percentage <= 60) return "#FFFF33";
    if (data.percentage > 60 && data.percentage <= 100) return "red";
  };

  return (
    <CardWrapper
      elevation={3}
      background={isLoading ? "#f2f4f4" : "#FFFF"}
      styles={{ margin: "5px" }}
    >
      <div className={s.cardContent}>
        <div className={s.cardHeader}>
          <div className={s.headerWrapper}>
            {isLoading ? (
              <Loader>
                <div className={s.cardTitle}>
                  <h4>{data.title}</h4>
                  <small className={s.textMuted}>{data.titleDescription}</small>
                </div>
              </Loader>
            ) : (
              <>
                <div className={s.cardTitle}>
                  <h4>{data.title}</h4>
                  <small className={s.textMuted}>{data.titleDescription}</small>
                </div>
                <div
                  style={{ backgroundColor: getPercentageColor() }}
                  className={s.badge}
                >
                  {data.percentage}%
                </div>
              </>
            )}
          </div>
        </div>

        <div className={s.cardBody}>
          <h2 style={{ opacity: isLoading ? "0" : "1" }}>{data.amount}</h2>
          {data.itemList.map((item) =>
            isLoading ? (
              <Loader key={item.id}>
                <div className={s.cardBottomRow}>
                  <small className={s.textMuted}>{item.timeAgo}</small>
                  <h6 className={s.valueHolder} data-custom="yesterday">
                    {item.amount}
                  </h6>
                </div>
              </Loader>
            ) : (
              <div className={s.cardBottomRow} key={item.id}>
                <small className={s.textMuted}>{item.timeAgo}</small>
                <h6 className={s.valueHolder} data-custom="yesterday">
                  {item.amount}
                </h6>
              </div>
            )
          )}
        </div>
      </div>
    </CardWrapper>
  );
}
