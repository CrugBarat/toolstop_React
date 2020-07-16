import React, {Fragment} from 'react';
import MenuList from '../components/MenuList.js';
import Top40ImageData from '../config/Top40ImageData.js';
import './Views.css';

export default function Top40() {
  return (
    <Fragment>
      <div className="top40-container">
        <h1 className="top40-title">Top 40</h1>
        <MenuList images={Top40ImageData}/>
      </div>
    </Fragment>
  )
}
