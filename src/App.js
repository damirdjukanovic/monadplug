import { useState, useEffect } from "react";
import "./index.css";

import Card from "./components/card/Card";
import Tickets from "./components/tickets/Tickets";
import NavbarProfileInfo from "./components/navbarProfileInfo/NavbarProfileInfo";
import NavbarWidget from "./components/navbarWidget/NavbarWidget";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import TransitionModal from "./components/transitionModal/TransitionModal";
import CurrentPageBar from "./components/currentPageBar/CurrentPageBar";
import CardWrapper from "./components/cardWrapper/CardWrapper";
import ProfileSettingsCard from "./components/profileSettingsCard/ProfileSettingsCard";
import ProfileSettingsCategory from "./components/profileSettingsCategory/ProfileSettingsCategory";

import { cardData1, cardData2, cardData3, user } from "./components/dummyData";

function App({ location }) {
  const [currentCategory, setCurrentCategory] = useState("general");

  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <CurrentPageBar path={["Offers", "Offers - Omnipotent-ME"]} />
      <hr />
      <hr />
      <Navbar user={user} />
      <hr />
      <hr />
      <div className="widgetsWrapper" style={{ marginTop: "20px" }}>
        <Card data={cardData1} isLoading={isLoading} />
        <Card data={cardData2} isLoading={isLoading} />
        <Card data={cardData1} isLoading={isLoading} />
        <Card data={cardData3} isLoading={isLoading} />
        <Card data={cardData2} isLoading={isLoading} />
        <Card data={cardData3} isLoading={isLoading} />
      </div>
      <hr />
      <hr />
      <TransitionModal />
      <hr />
      <hr />
      <div style={{ width: "90vw", height: "500px" }}>
        <Tickets />
      </div>
      <hr />
      <hr />
      <Footer />
      <hr />
      <hr />
      <div className="profileSettingsPage">
        <div className="profileSettingsCategories">
          <ProfileSettingsCategory
            version="general"
            whenClicked={() => setCurrentCategory("general")}
            currentCategory={currentCategory}
          />
          <ProfileSettingsCategory
            version="password"
            whenClicked={() => setCurrentCategory("password")}
            currentCategory={currentCategory}
          />
          <ProfileSettingsCategory
            version="pin"
            whenClicked={() => setCurrentCategory("pin")}
            currentCategory={currentCategory}
          />
          <ProfileSettingsCategory
            version="social"
            whenClicked={() => setCurrentCategory("social")}
            currentCategory={currentCategory}
          />
          <ProfileSettingsCategory
            version="messages"
            whenClicked={() => setCurrentCategory("messages")}
            currentCategory={currentCategory}
          />
          <ProfileSettingsCategory
            version="company"
            whenClicked={() => setCurrentCategory("company")}
            currentCategory={currentCategory}
          />
          <ProfileSettingsCategory
            version="payment"
            whenClicked={() => setCurrentCategory("payment")}
            currentCategory={currentCategory}
          />
        </div>
        <ProfileSettingsCard settingsType={currentCategory} />
      </div>
      <hr />
      <hr />
    </div>
  );
}

export default App;
