import React, {Fragment} from 'react';
import './Klarna.css';

const Klarna = (props) => {
  return (
    <Fragment>
      <a className="klarna-link" href="https://www.toolstop.co.uk/tools-on-finance">
        <div className="klarna-container">
          <div className="klarna">
            <div className="inline-klarna">
              <p className="klarna-text">3 months interest-free payments with</p>
              <div className="klarna-logo-container">
                <img className="klarna-logo" src="https://x.klarnacdn.net/payment-method/assets/badges/generic/black/klarna.svg" />
                <p className="find-out-more">Find out more</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Fragment>
  )
}

export default Klarna;
