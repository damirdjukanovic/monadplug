import React, { useRef } from "react";
import s from "./TicketsSmallDropdown.module.css";
import { Link } from "react-router-dom";
import { useOutsideClick } from "../../hooks/useOutsideClick";

export default function TicketsSmallDropdown({ version, setIsDropdownOpen }) {
  const wrapperRef = useRef(null);

  useOutsideClick(wrapperRef, setIsDropdownOpen);

  return (
    <div className={s.dropdown} ref={wrapperRef}>
      <div className={s.content}>
        <div className={s.pointerSquare}></div>
        <Link className={s.firstItem} to="#">
          {version === "tag" && (
            <span className={`${s.bullet} ${s.orange}`}></span>
          )}
          <span>All</span>
        </Link>
        <Link to="#">
          {version === "tag" ? (
            <>
              <span className={`${s.bullet} ${s.orange}`}></span>
              <span>New & Unread</span>
            </>
          ) : (
            <span>Common Questions</span>
          )}
        </Link>
        <Link to="#">
          {version === "tag" ? (
            <>
              <span className={`${s.bullet} ${s.green}`}></span>
              <span>Read</span>
            </>
          ) : (
            <span>Payments</span>
          )}
        </Link>
        <Link to="#">
          {version === "tag" ? (
            <>
              <span className={`${s.bullet} ${s.red}`}></span>
              <span>Close</span>
            </>
          ) : (
            <span>Traffic</span>
          )}
        </Link>
        {version === "folder" && (
          <Link to="#">
            <span>Change Manager</span>
          </Link>
        )}
      </div>
    </div>
  );
}
