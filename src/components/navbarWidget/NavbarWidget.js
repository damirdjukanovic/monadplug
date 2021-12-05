import React, { useState, useRef } from "react";
import s from "./NavbarWidget.module.css";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import CardWrapper from "../cardWrapper/CardWrapper";
import { Link } from "react-router-dom";

import { useOutsideClick } from "../hooks/useOutsideClick";

export default function NavbarWidget(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { version, user } = props;
  const wrapperRef = useRef();

  useOutsideClick(wrapperRef, setIsOpen, [false]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const getIcon = () => {
    if (version === "balance") {
      return <MonetizationOnOutlinedIcon fontSize="small" />;
    }
    if (version === "manager") {
      return <AccountCircleOutlinedIcon fontSize="small" />;
    }
  };

  const renderBalance = () => {
    return (
      <>
        <div>
          <h6 className={s.balanceText}>Balance</h6>
          <h5 className={s.balanceAmount}>${user.balance}</h5>
        </div>
        <hr />
        <div>
          <h6 className={s.balanceText}>Paid</h6>
          <h5 className={s.balanceAmount}>${user.paid}</h5>
        </div>
      </>
    );
  };

  const renderManager = () => {
    return (
      <>
        <div>
          <h6 className={s.balanceText}>Name</h6>
          <h5 className={`${s.balanceAmount} ${s.managerAmount}`}>
            {user.role}
          </h5>
        </div>
        <hr />
        <div>
          <div className={s.dropdownGroup}>
            <h6 className={s.balanceText}>Email</h6>
            <OpenInNewOutlinedIcon />
          </div>
          <div className={s.dropdownGroup}>
            <h5 className={`${s.balanceAmount} ${s.managerAmount}`}>
              {user.email}
            </h5>
            <div
              onClick={() => {
                navigator.clipboard.writeText(user.email);
              }}
            >
              <ContentCopyOutlinedIcon />
            </div>
          </div>
          <hr />
          <Link to="#" className={s.buttonDiv}>
            <button>Send ticket</button>
          </Link>
        </div>
      </>
    );
  };

  return (
    <div
      className={isOpen ? `${s.NavbarWidget} ${s.cardOpen}` : s.NavbarWidget}
      onClick={handleClick}
      ref={wrapperRef}
    >
      <div
        className={
          isOpen
            ? `${s.NavbarWidgetHeader} ${s.headerOpen}`
            : s.NavbarWidgetHeader
        }
      >
        {getIcon()}
        <span>{version}</span>
      </div>
      <div
        className={
          isOpen
            ? `${s.cardBodyContainer} ${s.cardBodyActive}`
            : s.cardBodyContainer
        }
      >
        <div className={s.NavbarWidgetBody}>
          {version === "balance" && renderBalance()}
          {version === "manager" && renderManager()}
        </div>
      </div>
    </div>
  );
}
