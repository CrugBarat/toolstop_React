import React, {Fragment} from 'react';
import getImage from '../../../utils/defaultImgMap.js';

import './SearchBar.css';

const SearchBar = () => {
  return (
    <Fragment>
      <div className="search-bar-menu-container">
        <div className="toolstop-logo-container">
            <a href="/">
              <img className="toolstop-logo" src="https://cdn11.bigcommerce.com/s-7holhynnib/images/stencil/250x100/toolstop_logo_1582119093__49512.original.png" alt="Toolstop" />
            </a>
        </div>
        <div className="search-bar-container">
          <input className="search-bar" type="text" placeholder="Search product or brand..."/>
        </div>
        <div className="user-container">
        <a href="https://www.toolstop.co.uk/">
          <div className="user-basket-container">
            <img className="user-basket" src={getImage("basket")} alt="Shopping Basket"/>
          </div>
        </a>
          <a href="https://www.toolstop.co.uk/login.php">
            <div className="sign-in-container">
              <p className="sign-in-text">Sign in</p>
              <img className="signin-logo" src={getImage("signin")} alt="Sign in logo"/>
            </div>
          </a>
        </div>
    </div>
    </Fragment>
  )
}

export default SearchBar;
