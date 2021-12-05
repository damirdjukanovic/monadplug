import React from "react";
import Paper from "@mui/material/Paper";
import s from "./CardWrapper.module.css";

function CardWrapper({
  children,
  elevation,
  background,
  height = "fitContent",
  width = "100%",
  styles,
}) {
  return (
    <Paper
      elevation={elevation}
      className={s.CardWrapper}
      sx={{
        padding: "1rem",
        height: height,
        width: width,
        backgroundColor: background,
        border: "1px solid #dfe3e7",
        ...styles,
      }}
    >
      {children}
    </Paper>
  );
}

export default CardWrapper;
