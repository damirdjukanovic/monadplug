import React, { useState } from "react";
import s from "./NavbarProfileInfo.module.css";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import ProfileDropdown from "./profileDropdown/ProfileDropdown";

export default function NavbarProfileInfo({ user }) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const elem = document.documentElement;

  const goFullScreen = () => {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE11 */
      elem.msRequestFullscreen();
    }
    setIsFullScreen(true);
  };

  const closeScreen = async () => {
    if (!document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE11 */
      document.msExitFullscreen();
    }
    setIsFullScreen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={s.NavbarProfileInfo}>
      <div className={s.infoGroup} onClick={toggleDropdown}>
        <div className={s.profilePicture}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSufaRuit6FWQH2RBZg-j4Q-IXSJOXHcQnKqg&usqp=CAU"
            alt="profile"
          />
        </div>
        <div className={s.profileInfo}>
          <p classsName={s.name}>{user.name}</p>
          <p className={s.email}>{user.email}</p>
        </div>
        {isOpen && <ProfileDropdown setIsOpen={setIsOpen} />}
      </div>
      <div className={s.fullscreen}>
        {isFullScreen ? (
          <FullscreenExitIcon fontSize="medium" onClick={closeScreen} />
        ) : (
          <FullscreenIcon fontSize="medium" onClick={goFullScreen} />
        )}
      </div>
    </div>
  );
}
