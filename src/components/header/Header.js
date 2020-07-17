import React, {Fragment} from 'react';
import HelpBar from './helpBar/HelpBar.js';
import Klarna from './klarna/Klarna.js';
import SearchBar from './searchBar/SearchBar.js';
import ProductMenu from './productMenu/ProductMenu.js';
import InfoBar from './infoBar/InfoBar.js';
import './Header.css';

const Header = () => {
  return (
    <Fragment>
    <div className="header-fixed">
        <HelpBar />
        <Klarna />
        <div className="header-container">
          <div className="header">
            <SearchBar />
            <ProductMenu />
          </div>
        </div>
        <InfoBar />
      </div>
    </Fragment>
  )
}

export default Header;
