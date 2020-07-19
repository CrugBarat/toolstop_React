import React, {Fragment, useState} from 'react';
import './FilterBar.css';

const FilterBar = ({getSearch, handlePriceFilter, handleClick}) => {

  const [minPrice, setMinPrice] = useState(0);
  const [maxnPrice, setMaxPrice] = useState(0);

  function handleChange(e){
    getSearch(e.target.value);
  }

  function handlePriceMin(e){
    setMinPrice(e.target.value);
  }

  function handlePriceMax(e){
    setMaxPrice(e.target.value);
  }

  function handleSubmit(){
    handlePriceFilter(minPrice, maxnPrice);
  }

  function handleReset(){
    handleClick();
  }

  return (
    <Fragment>
      <div className="filter-bar-container">
        <p className="filter-bar-title">Filters</p>
        <div className="product-search-container">
          <input className="product-search-input" type="text" onChange={handleChange} placeholder="Search top products..."/>
          <button onClick={handleReset}>RESET</button>
        </div>
        <div className="price-filter-container">
          <label className="price-filter-label">Min(£)</label>
            <input className="price-filter-imput" type="number" name="price" onChange={handlePriceMin} required min='0' />
          <label className="price-filter-label">Max(£)</label>
            <input className="price-filter-imput" type="number" name="price" onChange={handlePriceMax} required min='0' />
          <button onClick={handleSubmit}>SUBMIT</button>
          <button onClick={handleReset}>RESET</button>
        </div>
      </div>
    </Fragment>
  )
}

export default FilterBar;
