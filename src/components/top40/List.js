import React, {Fragment, useState, useEffect} from 'react';
import MenuItem from './menuItem/MenuItem.js';
import ProductItem from './productItem/ProductItem.js';
import Loading from './loadingSpinner/Loading.js';
import FilterBar from './filterBar/FilterBar.js';
import getImage from '../../utils/defaultImgMap.js';
import './productItem/ProductItem.css';

const List = ({images, hideMenu, api, handleTitleImage}) => {

  const [hideMenuList, setMenuList] = useState(hideMenu);
  const [fetchApi] = useState(api);
  const [topData, setTopData] = useState();
  const [searchData, setSearchData] = useState();
  const [brand, setBrand] = useState("");
  const [fetchTrigger, setFetchTrigger] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [brand, fetchTrigger]);

  async function fetchData() {
    const res = await fetch(fetchApi + brand);
     res.json().then(data => setTopData(data.data)).then(setLoading(false)).catch(err => console.err);
  }

  function handleClick(brand) {
    setTopData(null);
    setLoading(true);
    setMenuList(true);
    setBrand(brand);
    triggerFetch();
    handleTitleImage(brand);
  }

  function handleSearch(value) {
    let newSearch =  topData.filter((data) => {
      if(data.name.toLowerCase().includes(value.toLowerCase())) {
        return data;
      }
    });
    setTopData(newSearch);
  }

  function handlePriceFilter(min, max) {
    let newSearch =  topData.filter((data) => {
      if(data.price*1.20 >= min && data.price*1.20 <= max) {
        return data;
      }
    });
    setTopData(newSearch);
  }

  function handleReset() {
    setLoading(true);
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
    setMenuList(false);
    handleTitleImage("");
  }

  const menuItem = images.sort(function(a, b) {
    return a.priority - b.priority;
  }).map((image, index) => {
    if (hideMenuList) return null;
    return <MenuItem image={image} key={index} onClick={handleClick} />
  });

  if (topData && hideMenuList) {
    var productItem = topData.map((product, index) => {
       return <ProductItem product={product} key={index} />
     });
  }

  if (hideMenuList) {
    var backButton =
    <div className="product-list-back" onClick={toggleProductList}>
      <img className="back-image" src={getImage("arrow")} alt=""/>
      <p className="back-text">Back</p>
    </div>
  }

  if (hideMenuList) {
    var filterBar =
    <FilterBar getSearch={handleSearch} handlePriceFilter={handlePriceFilter} handleClick={handleReset}/>
  }

  if (topData && topData.length < 1) {
    var resultErr =
    <p className="result-err">No results</p>
  }

  return(
    <Fragment>
      <div>
        <div className="menu-list-container">
          {menuItem}
        </div>
      </div>
      <div>
        {loading ? <Loading /> :
          <div>
              {filterBar}
              {resultErr}
            <div className="product-list-container">
              {backButton}
              {productItem}
            </div>
          </div>
        }
      </div>
    </Fragment>
  )

}

export default List;
