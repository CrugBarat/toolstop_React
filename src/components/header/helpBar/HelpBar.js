import React, {Fragment} from 'react';
import './HelpBar.css';

const HelpBar = () => {
  return (
    <Fragment>
      <div className="help-bar-container">
        <div className="help-bar">
          <div className="help-bar-number">
            <p>Tel: <a href="tel:0800 107 8665">0800 107 8665</a> / <a href="tel:01698 819 000">01698 819 000</a></p>
          </div>
          <div className="help-bar-quicklinks">
            <ul>
              <li className="quick-links">
                <a className="quick-links-link" href="https://www.toolstop.co.uk/about-us">About us</a>
              </li>
              <li className="quick-links">
                <a className="quick-links-link" href="https://www.toolstop.co.uk/blog/">Blog</a>
              </li>
              <li className="quick-links">
                <a className="quick-links-link" href="https://www.toolstop.co.uk/customer-services">Customer services</a>
              </li>
              <li className="quick-links">
                <a className="quick-links-link" href="https://www.toolstop.co.uk/login.php?from=account.php%3Faction%3Dorder_status">Track order</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default HelpBar;
