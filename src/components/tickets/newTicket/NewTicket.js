import s from "./NewTicket.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { products, options } from "../../dummyData";
import Select from "react-select";

//react-select styles
const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    overflow: "hidden",
    font: "0.8rem",
  }),
  control: (provided, state) => ({
    ...provided,
    border: state.isFocused ? "1px solid orange" : "1px solid #dfe3e7",
    boxShadow: state.isFocused ? "-3px 6px 10px 0 rgb(25 42 70 / 13%)" : "none",
    "&:focus": {
      border: "1px solid orange",
    },
    "&:hover": {
      border: "1px solid orange",
    },
  }),
};

export default function NewTicket({ isOpen, setNewTicketOpen }) {
  return (
    <div className={isOpen ? `${s.newTicket} ${s.showTicket}` : s.newTicket}>
      <div className={s.newTicketTop}>
        <h4>New Ticket</h4>
        <CloseIcon onClick={() => setNewTicketOpen(false)} />
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
            <Select
              options={options}
              styles={customStyles}
              menuPlacement="auto"
              placeholder="Choose type"
            />
          </fieldset>
          <fieldset>
            <label>OFFER</label>
            <Select
              options={products}
              styles={customStyles}
              menuPlacement="auto"
              placeholder="Choose offer"
            />
          </fieldset>
          <div className={s.newTicketBottom}>
            <button
              type="button"
              className={s.cancelButton}
              onClick={() => setNewTicketOpen(false)}
            >
              Cancel
            </button>
            <button type="submit" className={s.submitButton}>
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
