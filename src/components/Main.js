import React, { useState } from "react";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";
import "./Main.css";
import { useEffect } from "react/cjs/react.development";

const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);

  return (
    <div className="main">
      <div className="main__content">
        <div className="punk__highlight">
          <div className="punk__container">
            <img
              className="selected-punk"
              src={activePunk.image_original_url}
              alt=""
            />
          </div>
        </div>

        <div className="details__container">
          <div className="punk__details">
            <div className="title">{activePunk.name}</div>
            <span className="item-number">&middot;#{activePunk.token_id}</span>
          </div>
          <div className="owner">
            <div className="owner__image--container">
              <img
                className="owner__image"
                  src={activePunk.owner.profile_img_url}
                alt=""
              />
            </div>
            <div className="owner__details">
              <div className="owner__details--name-and-handle">
                <div className="owner__details--address">
                  {activePunk.owner.address}
                </div>
                <div className="owner__details--handle">@manish_manwani_</div>
              </div>
              <div className="owner__details--link">
                <img src={instagramLogo} alt="" />
              </div>
              <div className="owner__details--link">
                <img src={twitterLogo} alt="" />
              </div>
              <div className="owner__details--link">
                <img src={moreIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
