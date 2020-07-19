import React, {Fragment, useState, useEffect} from 'react';
import MenuItem from './menuItem/MenuItem.js';
import ProductItem from './productItem/ProductItem.js';
import Loading from './loadingSpinner/Loading.js';
import getImage from '../../utils/defaultImgMap.js';
import './productItem/ProductItem.css';

const List = ({images}) => {

  const [hideTop40, setHideTop40] = useState(false);
  const [topData, setTopData] = useState();
  const [brand, setBrand] = useState("");
  const [fetchTrigger, setFetchTrigger] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [brand, fetchTrigger]);

  async function fetchData() {
    const res = await fetch("https://product-fetch-toolstop.herokuapp.com/top40" + brand);
     res.json().then(data => setTopData(data.data)).then(setLoading(false)).catch(err => console.err);
  }

  function handleClick(brand) {
    setTopData(null);
    setLoading(true);
    setHideTop40(true);
    setBrand(brand);
    triggerFetch();
  }

  function triggerFetch() {
    if (!fetchTrigger) {
      setFetchTrigger(true);
    } else {
      setFetchTrigger(false);
    }
  }

  function toggleProductList() {
    setHideTop40(false);
  }

  const menuItem = images.sort(function(a, b) {
    return a.priority - b.priority;
  }).map((image, index) => {
    if (hideTop40) return null;
    return <MenuItem image={image} key={index} onClick={handleClick} />
  });

  if (topData && hideTop40) {
    var productItem = topData.map((product, index) => {
       return <ProductItem product={product} key={index} />
     });
  }

  if (hideTop40) {
    var backButton =
    <div className="product-list-back" onClick={toggleProductList}>
      <img className="back-image" src={getImage("arrow")} alt=""/>
      <p className="back-text">Back</p>
    </div>
  }

  return(
    <Fragment>
      <div>
        <div className="menu-list-container">
          {menuItem}
        </div>
      </div>
        <div>
          <div className="product-list-container">
            {backButton}
            {loading ? <Loading /> : productItem}
          </div>
        </div>
    </Fragment>
  )

}

export default List;
