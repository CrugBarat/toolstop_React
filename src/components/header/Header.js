import React, {Fragment} from 'react';
import HelpBar from './helpBar/HelpBar.js';
import Klarna from './klarna/Klarna.js';

const Header = (props) => {
  return (
    <Fragment>
      <HelpBar />
      <Klarna />
    </Fragment>
  )
}

export default Header;
