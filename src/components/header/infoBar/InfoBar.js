import React, {Fragment} from 'react';
import './InfoBar.css';
import getImage from '../../../utils/defaultImgMap.js';


const InfoBar = () => {
  return (
    <Fragment>
      <div className="info-bar-outer">
        <div className="info-bar-container">
          <div className="info-bar">
            <div className="info-section">
              <a href="https://www.toolstop.co.uk/delivery">
                <img className="info-image" src={getImage("truck")} alt="Truck"/>
                <p className="info-text">FREE Delivery on orders over £99</p>
              </a>
            </div>
            <div className="info-section-main">
              <div className="info-sub-section-main">
                <a href="https://www.toolstop.co.uk/delivery">
                  <img className="info-image" src={getImage("truck")} alt="Truck"/>
                  <p className="info-text">FREE Delivery on orders over £99</p>
                </a>
              </div>
            </div>
            <div className="info-section">
              <div className="info-sub-section">
                <a href="https://www.toolstop.co.uk/delivery">
                  <img className="info-image" src={getImage("calendar")} alt="Truck"/>
                  <p className="info-text">Next Working Day Delivery</p>
                </a>
              </div>
            </div>
            <div className="info-section">
              <a href="https://www.toolstop.co.uk/tools-on-finance">
                <img className="info-image" src={getImage("percent")} alt="Truck"/>
                <p className="info-text">Finance Available over £150</p>
              </a>
            </div>
            <div className="info-section">
              <a href="https://www.toolstop.co.uk/returns">
                <img className="info-image" src={getImage("parcel")} alt="Truck"/>
                <p className="info-text">FREE 60 Day Returns</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default InfoBar;
