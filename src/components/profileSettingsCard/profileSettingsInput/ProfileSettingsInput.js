import React, { useState } from "react";
import s from "./ProfileSettingsInput.module.css";
import Select from "react-select";

export default function ProfileSettingsInput(props) {
  const { type, label, placeholder, options, inputType = "text" } = props;

  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      overflow: "hidden",
      fontSize: "0.8rem",
    }),
    // container: (provided, state) => ({
    //   ...provided,
    //   display: "flex",
    //   alignItems: "center",
    // }),
    control: (base, state) => ({
      ...base,
      fontSize: "0.9rem",

      border: state.isFocused ? "1px solid orange" : "1px solid #dfe3e7",
      boxShadow: state.isFocused
        ? "-3px 6px 10px 0 rgb(25 42 70 / 13%)"
        : "none",
      "&:focus": {
        border: "1px solid orange",
      },
      "&:hover": {
        border: "1px solid orange",
      },
    }),
    input: (base, state) => ({
      ...base,
      marginTop: "0px",
      marginBottom: "0px",
      paddingTop: "0px",
      paddingBottom: "0 px",
    }),
  };

  return (
    <div className={s.profileSettingsInput}>
      <label>{label}</label>
      {type === "select" ? (
        <Select
          options={options}
          styles={customStyles}
          menuPlacement="auto"
          placeholder={placeholder}
          className={s.profileSettingsSelect}
        />
      ) : (
        <input placeholder={placeholder} type={inputType} />
      )}
    </div>
  );
}
