import React, { useState, useEffect } from "react";
import s from "./ProfileSettingsCard.module.css";
import CardWrapper from "../cardWrapper/CardWrapper";
import ProfileSettingsInput from "./profileSettingsInput/ProfileSettingsInput";
import ProfileSettingsButton from "./profileSettingsButton/ProfileSettingsButton";
import { countries, payment } from "../dummyData";

export default function ProfileSettingsCard(props) {
  const [active, setActive] = useState("wire");

  const { settingsType, user } = props;

  //Formatting to satisfy react-select options object
  const normalizeCountries = countries.map((c) => ({
    label: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={c.image} alt={c.name} style={{ marginRight: "5px" }} />
        {c.name}
      </div>
    ),
    value: c.id,
  }));

  const handleActive = (name) => {
    setActive(name);
  };

  const renderGeneral = () => {
    return (
      <form>
        <ProfileSettingsInput label="First name" />
        <ProfileSettingsInput label="Last name" />
        <ProfileSettingsInput
          label="Choose country"
          type="select"
          options={normalizeCountries}
          placeholder="Choose country"
        />
        <ProfileSettingsButton />
      </form>
    );
  };

  const renderPassword = () => {
    return (
      <form>
        <ProfileSettingsInput label="Password" inputType="password" />
        <ProfileSettingsInput label="Repeat password" inputType="password" />
        <ProfileSettingsButton />
      </form>
    );
  };

  const renderPin = () => {
    return (
      <form>
        <ProfileSettingsInput label="Pin" inputType="password" />
        <ProfileSettingsInput label="Repeat pin" inputType="password" />
        <ProfileSettingsButton />
      </form>
    );
  };

  const renderSocial = () => {
    return (
      <form>
        <ProfileSettingsInput
          label="Facebook"
          placeholder="Facebook profile link"
        />
        <ProfileSettingsInput
          label="Google"
          placeholder="Google profile link"
        />
        <ProfileSettingsInput
          label="Twitter"
          placeholder="Twitter profile link"
        />
        <ProfileSettingsInput
          label="Linkedin"
          placeholder="Linkedin profile link"
        />
        <ProfileSettingsInput
          label="Instragram"
          placeholder="Instagram profile link"
        />
        <ProfileSettingsButton />
      </form>
    );
  };

  const renderMessages = () => {
    return (
      <form>
        <ProfileSettingsInput label="Skype" placeholder="Skype profile link" />
        <ProfileSettingsInput
          label="Telegram"
          placeholder={user ? user.username : "damirdjukanovic"}
        />
        <ProfileSettingsInput
          label="Whatsapp"
          placeholder="Whatsapp phone number"
        />
        <ProfileSettingsButton />
      </form>
    );
  };

  const renderCompany = () => {
    return (
      <form>
        <ProfileSettingsInput label="Company name" placeholder="Company name" />
        <ProfileSettingsInput
          label="Country"
          type="select"
          placeholder="Select country"
        />
        <ProfileSettingsInput label="City" placeholder="City" />
        <ProfileSettingsInput label="Address" placeholder="Address" />
        <ProfileSettingsInput label="Zip code" placeholder="ZIP code" />
        <ProfileSettingsInput
          label="Company email"
          placeholder="Company email"
        />
        <ProfileSettingsInput label="Tax" placeholder="Tax" />
        <ProfileSettingsButton />
      </form>
    );
  };

  const renderPayment = () => {
    return (
      <form>
        <div className={s.paymentCardTop}>
          <div
            onClick={() => handleActive("wire")}
            className={active === "wire" ? s.active : ""}
          >
            wire
          </div>
          <div
            onClick={() => handleActive("paypal")}
            className={active === "paypal" ? s.active : ""}
          >
            paypal
          </div>
          <div
            onClick={() => handleActive("tipalti")}
            className={active === "tipalti" ? s.active : ""}
          >
            tipalti
          </div>
        </div>
        <hr />
        <ProfileSettingsInput
          label={`${active.toUpperCase()} ACTIVE`}
          type="select"
          options={payment}
        />
      </form>
    );
  };

  const renderContent = () => {
    if (settingsType.toLowerCase() === "general") return renderGeneral();
    if (settingsType.toLowerCase() === "password") return renderPassword();
    if (settingsType.toLowerCase() === "pin") return renderPin();
    if (settingsType.toLowerCase() === "social") return renderSocial();
    if (settingsType.toLowerCase() === "messages") return renderMessages();
    if (settingsType.toLowerCase() === "company") return renderCompany();
    if (settingsType.toLowerCase() === "payment") return renderPayment();
  };
  return (
    <CardWrapper background="#FFFF" elevation={8}>
      <div className={s.profileSettingsCard}>{renderContent()}</div>
    </CardWrapper>
  );
}
