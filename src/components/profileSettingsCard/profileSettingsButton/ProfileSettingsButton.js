import React from "react";
import s from "./ProfileSettingsButton.module.css";

export default function ProfileSettingsButton(props) {
  const { type, text } = props;

  return (
    <div className={s.profileSettingsButton}>
      <button type={type ? type : "button"}>
        {text ? text : "Save changes"}
      </button>
    </div>
  );
}
