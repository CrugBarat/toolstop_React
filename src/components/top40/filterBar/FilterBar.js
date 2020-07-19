import React, {Fragment, useState} from 'react';
import './FilterBar.css';

const FilterBar = ({getSearch, handleClick}) => {

  const [search, setSearch] = useState();

  function handleChange(e){
    getSearch(e.target.value);
  }

  function handleReset(){
    handleClick();
  }

  return (
    <Fragment>
    <div className="filter-bar-container">
      <div className="product-search-container">
        <input className="product-search-input" type="text" onChange={handleChange} placeholder="Search top products..."/>
        <button onClick={handleReset}>RESET</button>
      </div>
    </div>
    </Fragment>
  )
}

export default FilterBar;
