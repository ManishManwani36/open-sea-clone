import React from "react";
import "./Header.css";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import themeSwitchIcon from "../assets/header/theme-switch.png"

const Header = () => {
  return (
    <div className="header">
      <div className="logo__container">
        <img src={punkLogo} className="punkLogo" alt="" />
      </div>

      <div className="searchbar">
        <div className="searchIcon__container">
          <img src={searchIcon} alt="" />
        </div>
        <input
          type="text"
          className="searchInput"
          placeholder="Collection, item or user ..."
        />
      </div>

      <div className="header__items">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      <div className="header__actions">
          <div className="header__theme-switch--container">
              <img src={themeSwitchIcon} alt="" />
          </div>
      </div>

      <div className="login-button">
          GET IN
      </div>
    </div>
  );
};

export default Header;
