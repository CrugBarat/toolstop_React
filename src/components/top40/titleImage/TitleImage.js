import React, {Fragment, useState, useEffect} from 'react';
import getImage from '../../../utils/defaultImgMap.js';
import './TitleImage.css';

const TitleImage = ({brand}) => {

  if(!brand) {
    return <p className="top40-title">Top 40</p>
  }

  return (
    <Fragment>
      <div className="title-image-container">
        <img className="title-image" src={getImage(brand)} alt=""/>
      </div>
    </Fragment>
  )
}

export default TitleImage;
