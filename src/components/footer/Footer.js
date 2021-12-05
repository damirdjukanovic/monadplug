import React from "react";
import s from "./Footer.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Footer() {
  return (
    <div className={s.footer}>
      <span className={s.spanLeft}>2021 © MONETIZEAD</span>
      <span className={s.spanRight}>
        Crafted with <FavoriteIcon /> by MONETIZEAD
      </span>
    </div>
  );
}
