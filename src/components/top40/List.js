import React, {Fragment, useState, useEffect} from 'react';
import MenuItem from './menuItem/MenuItem.js';
import ProductItem from './productItem/ProductItem.js';
import getImage from '../../utils/defaultImgMap.js';
import './productItem/ProductItem.css';

const List = ({images}) => {

  const [hideTop40, setHideTop40] = useState(false);
  const [hideProductItem, setHideProductItem] = useState(true);
  const [topData, setTopData] = useState();
  const [brand, setBrand] = useState("");

  useEffect(() => {
    fetchData();
  }, [brand]);

  async function fetchData() {
    const res = await fetch("https://product-fetch-toolstop.herokuapp.com/top40" + brand);
     res.json().then(data => setTopData(data.data)).catch(err => console.err);
  }

  function handleClick(brand) {
    setTopData(null);
    setHideTop40(true);
    setHideProductItem(false);
    setBrand(brand);
  }

  function toggleProductList() {
    setHideTop40(false);
    setHideProductItem(true);
  }

  const menuItem = images.sort(function(a, b) {
    return a.priority - b.priority;
  }).map((image, index) => {
    if (hideTop40) return;
    return <MenuItem image={image} key={index} onClick={handleClick} />
  });

  if (topData && hideTop40) {
    var productItem = topData.map((product, index) => {
       return <ProductItem product={product} key={index} />
     });
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
            <div className="product-list-back" onClick={toggleProductList}>
              <img className="back-image" src={getImage("arrow")} alt=""/>
              <p className="back-text">Back</p>
            </div>
              {productItem}
          </div>
        </div>
    </Fragment>
  )

}

export default List;
