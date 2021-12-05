import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion/dist/es/index";

import s from "./Tickets.module.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import NewTicket from "./newTicket/NewTicket";
import TicketsSmallDropdown from "./ticketsSmallDropdown/TicketsSmallDropdown";

export default function Tickets() {
  const [newTicketOpen, setNewTicketOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownVersion, setDropdownVersion] = useState(null);

  const handleNewTicket = () => {
    setNewTicketOpen(!newTicketOpen);
  };

  const handleDropdownOpen = (version) => {
    setDropdownVersion(version);
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={s.tickets}>
      <NewTicket isOpen={newTicketOpen} setNewTicketOpen={setNewTicketOpen} />
      {/* animating backdrop */}
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {newTicketOpen && (
          <motion.div
            className={s.backdrop}
            onClick={handleNewTicket}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
          ></motion.div>
        )}
      </AnimatePresence>
      <div className={s.ticketsTop}>
        <div className={s.ticketsTopIcons}>
          <div className={s.icon} onClick={handleNewTicket}>
            <MailOutlineIcon fontSize="small" />
          </div>
          <div className={s.iconContainer}>
            <div
              className={s.icon}
              onClick={() => handleDropdownOpen("folder")}
            >
              <FolderOpenIcon fontSize="small" />
            </div>
            {isDropdownOpen && dropdownVersion === "folder" && (
              <TicketsSmallDropdown
                version={dropdownVersion}
                setIsDropdownOpen={setIsDropdownOpen}
              />
            )}
          </div>
          <div className={s.iconContainer}>
            <div className={s.icon} onClick={() => handleDropdownOpen("tag")}>
              <LocalOfferOutlinedIcon fontSize="small" />
            </div>
            {isDropdownOpen && dropdownVersion === "tag" && (
              <TicketsSmallDropdown
                version={dropdownVersion}
                setIsDropdownOpen={setIsDropdownOpen}
              />
            )}
          </div>
          <div className={s.icon}>
            <AutorenewOutlinedIcon fontSize="small" />
          </div>
        </div>
        <div className={s.ticketsTopRight}>
          <div className={s.searchBar}>
            <SearchIcon fontSize="small" className={s.searchIcon} />
            <input placeholder="Search tickets"></input>
          </div>
          <div className={s.arrowContainer}>
            <KeyboardArrowLeftIcon fontSize="small" />
          </div>
          <div className={s.arrowContainer}>
            <KeyboardArrowRightIcon fontSize="small" />
          </div>
        </div>
      </div>
    </div>
  );
}
