import React, {Fragment, useEffect} from 'react';
import Header from '../components/header/Header.js';
import List from '../components/top40/List.js';
import Top40ImageData from '../config/Top40ImageData.js';
import './Views.css';

export default function Top40() {

  useEffect(() => {
    document.title = "Top 40 Sellers"
  }, []);

  return (
    <Fragment>
      <Header />
      <div className="top40-container">
        <p className="top40-title">Top 40</p>
        <List images={Top40ImageData} />
      </div>
    </Fragment>
  )
}
