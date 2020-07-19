import React, {Fragment, useState} from 'react';
import './ProductItem.css';

const ProductItem = ({product}) => {
  const [url] = useState("https://www.toolstop.co.uk");

  if(!product) return null;

  function hover(e) {
    if (product.images.length > 1) {
      e.target.setAttribute('src', product.images[1].url_thumbnail);
    } else {
      e.target.setAttribute('src', product.images[0].url_thumbnail);
    }
  }

  function unhover(e) {
    e.target.setAttribute('src', product.images[0].url_thumbnail);
  }

  return (
    <Fragment>
    <a href= {url + product.custom_url.url}>
        <div className="product-item-container">
          <div>
            <img className="product-item-image" src={product.images[0].url_thumbnail} onMouseOver={hover} onMouseOut={unhover} alt="" />
          </div>
          <div>
            <p className="product-item-name">{product.name}</p>
          </div>
          <div>
            <p className="product-item-price">£ {(product.price + (product.price * 0.20)).toFixed(2)}</p>
          </div>
          <div>
            <p className="product-item-excVat">£ {product.price} ex. VAT</p>
          </div>
        </div>
      </a>
    </Fragment>
  )
}

export default ProductItem;
