import React from "react";
import s from "./CurrentPageBar.module.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Link } from "react-router-dom";

export default function CurrentPageBar(props) {
  const { path } = props;

  return (
    <div className={s.currentPage}>
      <Link to="#">
        <HomeOutlinedIcon className={s.homeIcon} />
      </Link>
      {path.map((p) => (
        <React.Fragment key={p}>
          <ArrowForwardIosOutlinedIcon className={s.arrows} />
          <Link to="#">
            <span>{p}</span>
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
}
