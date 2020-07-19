import React, {Fragment, useEffect, useState} from 'react';
import Header from '../components/header/Header.js';
import Footer from '../components/footer/Footer.js';
import TitleImage from '../components/top40/titleImage/TitleImage.js';
import List from '../components/top40/List.js';
import Top40ImageData from '../config/Top40ImageData.js';
import './Views.css';

export default function Top40() {

  const [api] = useState("https://product-fetch-toolstop.herokuapp.com/top40");
  const [brand, setBrand] = useState("");

  useEffect(() => {
    document.title = "Top 40 Sellers"
  }, []);

  function handleTitleImage(brand) {
    setBrand(brand.substring(1));
  }

  return (
    <Fragment>
      <Header />
      <div className="top40-container">
        <TitleImage brand={brand}/>
        <List images={Top40ImageData} hideMenu={false} api={api} handleTitleImage={handleTitleImage}/>
      </div>
      <Footer />
    </Fragment>
  )
}
