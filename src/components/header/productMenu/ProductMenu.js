import React, {Fragment} from 'react';
import './ProductMenu.css';

const ProductMenu = () => {
  return (
    <Fragment>
      <div className="product-menu-container">
        <ul className="product-menu">
          <a className="product-link" href="https://www.toolstop.co.uk/power-tools/">
            <li>POWER TOOLS</li>
          </a>
          <a className="product-link" href="https://www.toolstop.co.uk/hand-tools/">
            <li>HAND TOOLS</li>
          </a>
          <a className="product-link" href="https://www.toolstop.co.uk/accessories/">
            <li>ACCESSORIES</li>
          </a>
          <a className="product-link" href="https://www.toolstop.co.uk/equipment/">
            <li>EQUIPMENT</li>
          </a>
          <a className="product-link" href="https://www.toolstop.co.uk/brands/">
            <li>BRANDS</li>
          </a>
          <a className="product-link" href="https://www.toolstop.co.uk/clearance/">
            <li>CLEARANCE</li>
          </a>
          <a className="product-link" href="https://www.toolstop.co.uk/special-offers/">
            <li>SPECIAL OFFERS</li>
          </a>
        </ul>
      </div>
    </Fragment>
  )
}

export default ProductMenu;
