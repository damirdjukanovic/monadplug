import React, { useState } from "react";
import s from "./Tickets.module.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CloseIcon from "@mui/icons-material/Close";

export function NewTicket({ isOpen }) {
  return (
    <div className={isOpen ? `${s.newTicket} ${s.showTicket}` : s.newTicket}>
      <div className={s.newTicketTop}>
        <h4>New Ticket</h4>
        <CloseIcon />
      </div>
      <form>
        <div className={s.form}>
          <fieldset>
            <label>SUBJECT</label>
            <input
              className={s.subjectInput}
              placeholder="Enter subject"
            ></input>
          </fieldset>
          <fieldset>
            <label>TICKET CONTENT</label>
            <textarea placeholder="Enter description"></textarea>
          </fieldset>
          <fieldset>
            <label>TYPE</label>
            <select className={s.type}>
              <option value="Common questions">Common questions</option>
              <option value="Payments">Payments</option>
              <option value="Traffic">Traffic</option>
              <option value="Change manager">Change manager</option>
            </select>
          </fieldset>
          <fieldset>
            <label>OFFER</label>
            <select className={s.offer}>
              <option value="Common questions">Common questions</option>
              <option value="Common questions">Common questions</option>
              <option value="Common questions">Common questions</option>
            </select>
          </fieldset>
        </div>
      </form>
    </div>
  );
}

export default function Tickets() {
  const [newTicketOpen, setNewTicketOpen] = useState();

  const handleNewTicket = () => {
    setNewTicketOpen(!newTicketOpen);
  };

  return (
    <div className={s.tickets}>
      <NewTicket isOpen={newTicketOpen} />
      <div className={s.ticketsTop}>
        <div className={s.ticketsTopIcons}>
          <div className={s.icon} onClick={handleNewTicket}>
            <MailOutlineIcon fontSize="small" />
          </div>
          <div className={s.icon}>
            <FolderOpenIcon fontSize="small" />
          </div>
          <div className={s.icon}>
            <LocalOfferOutlinedIcon fontSize="small" />
          </div>
          <div className={s.icon}>
            <AutorenewOutlinedIcon fontSize="small" />
          </div>
        </div>
        <div className={s.searchBar}>
          <SearchIcon fontSize="small" className={s.searchIcon} />
          <input placeholder="Search tickets"></input>
          <KeyboardArrowLeftIcon fontSize="small" className={s.arrowLeft} />
        </div>
        <div className={s.arrowRightContainer}>
          <KeyboardArrowRightIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}
