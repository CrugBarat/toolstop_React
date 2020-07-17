import React, {Fragment} from 'react';
import HelpBar from './helpBar/HelpBar.js';
import Klarna from './klarna/Klarna.js';
import SearchBar from './searchBar/SearchBar.js';
import './Header.css';

const Header = (props) => {
  return (
    <Fragment>
      <HelpBar />
      <Klarna />
      <div className="header-container">
        <div className="header">
          <SearchBar />
        </div>
      </div>
    </Fragment>
  )
}

export default Header;
