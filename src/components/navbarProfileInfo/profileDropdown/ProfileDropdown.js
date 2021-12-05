import React, { useRef } from "react";
import s from "./ProfileDropdown.module.css";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useOutsideClick } from "../../hooks/useOutsideClick";

export default function ProfileDropdown({ setIsOpen }) {
  const wrapperRef = useRef();
  useOutsideClick(wrapperRef, setIsOpen, [false]);

  return (
    <div className={s.ProfileDropdown} ref={wrapperRef}>
      <div className={s.profileLink}>
        <PersonIcon fontSize="small" />
        <Link to="#">Profile</Link>
      </div>
      <div className={s.dropdownDivider}></div>
      <div className={s.profileLink} id={s.bottomLink}>
        <PowerSettingsNewIcon fontSize="small" />
        <Link to="#">Logout</Link>
      </div>
    </div>
  );
}
