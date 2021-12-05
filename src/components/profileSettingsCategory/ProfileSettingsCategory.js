import React, { useState } from "react";
import s from "./ProfileSettingsCategory.module.css";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";

export default function ProfileSettingsCategory(props) {
  const { version, whenClicked, currentCategory } = props;

  const renderGeneral = () => {
    return (
      <div
        className={
          currentCategory === version
            ? `${s.profileSettingsCategory} ${s.clicked}`
            : s.profileSettingsCategory
        }
      >
        <SettingsOutlinedIcon />
        <span>General</span>
      </div>
    );
  };

  const renderPassword = () => {
    return (
      <div
        className={
          currentCategory === version
            ? `${s.profileSettingsCategory} ${s.clicked}`
            : s.profileSettingsCategory
        }
      >
        <LockOutlinedIcon />
        <span>Change Password</span>
      </div>
    );
  };

  const renderPin = () => {
    return (
      <div
        className={
          currentCategory === version
            ? `${s.profileSettingsCategory} ${s.clicked}`
            : s.profileSettingsCategory
        }
      >
        <LockOutlinedIcon />
        <span>Change Pin</span>
      </div>
    );
  };

  const renderSocial = () => {
    return (
      <div
        className={
          currentCategory === version
            ? `${s.profileSettingsCategory} ${s.clicked}`
            : s.profileSettingsCategory
        }
      >
        <PeopleOutlinedIcon />
        <span>Social</span>
      </div>
    );
  };

  const renderMessages = () => {
    return (
      <div
        className={
          currentCategory === version
            ? `${s.profileSettingsCategory} ${s.clicked}`
            : s.profileSettingsCategory
        }
      >
        <ForumOutlinedIcon />
        <span>Messages</span>
      </div>
    );
  };

  const renderCompany = () => {
    return (
      <div
        className={
          currentCategory === version
            ? `${s.profileSettingsCategory} ${s.clicked}`
            : s.profileSettingsCategory
        }
      >
        <ApartmentOutlinedIcon />
        <span>Company</span>
      </div>
    );
  };

  const renderPayment = () => {
    return (
      <div
        className={
          currentCategory === version
            ? `${s.profileSettingsCategory} ${s.clicked}`
            : s.profileSettingsCategory
        }
      >
        <LocalAtmOutlinedIcon />
        <span>Payment</span>
      </div>
    );
  };

  const renderContent = () => {
    if (version.toLowerCase() === "general") return renderGeneral();
    if (version.toLowerCase() === "password") return renderPassword();
    if (version.toLowerCase() === "pin") return renderPin();
    if (version.toLowerCase() === "social") return renderSocial();
    if (version.toLowerCase() === "messages") return renderMessages();
    if (version.toLowerCase() === "company") return renderCompany();
    if (version.toLowerCase() === "payment") return renderPayment();
  };

  return <div onClick={whenClicked}>{renderContent()}</div>;
}
