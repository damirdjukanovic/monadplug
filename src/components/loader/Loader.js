import React from "react";
import Skeleton from "@mui/material/Skeleton";

export default function Loader({ children }) {
  return (
    <Skeleton
      variant="text"
      style={{ minWidth: "100%", backgroundColor: "white" }}
    >
      {children}
    </Skeleton>
  );
}
