import React, {Fragment} from 'react';
import Header from '../components/header/Header.js';
import MenuList from '../components/top40/MenuList.js';
import Top40ImageData from '../config/Top40ImageData.js';
import './Views.css';

export default function Top40() {
  return (
    <Fragment>
      <Header />
      <div className="top40-container">
        <div className="top40">
          <p className="top40-title">Top 40</p>
          <MenuList images={Top40ImageData} />
        </div>
      </div>
    </Fragment>
  )
}
