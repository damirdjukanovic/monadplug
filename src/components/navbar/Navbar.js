import React, { useState, useEffect } from "react";
import s from "./Navbar.module.css";
import NavbarProfileInfo from "../navbarProfileInfo/NavbarProfileInfo";
import NavbarWidget from "../navbarWidget/NavbarWidget";

export default function Navbar({ user }) {
  const [navbarChangedColor, setNavbarChangedColor] = useState(false);

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNavbarChangedColor(true);
    } else {
      setNavbarChangedColor(false);
    }
  };
  return (
    <div className={navbarChangedColor ? `${s.navbar} ${s.active}` : s.navbar}>
      <div className={s.popupGroup}>
        <NavbarWidget version="balance" user={user} />
        {user.status === 2 && <NavbarWidget version="manager" user={user} />}
      </div>
      <NavbarProfileInfo user={user} />
    </div>
  );
}
