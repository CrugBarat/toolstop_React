import React, {Fragment, useState} from 'react';
import './ProductItem.css';

const ProductItem = ({product}) => {
  const [url] = useState("https://www.toolstop.co.uk");

  if(!product) return null;

  return (
    <Fragment>
    <a href= {url + product.custom_url.url}>
        <div className="product-item-container">
          <div>
            <img className="product-item-image" src={product.images[0].url_thumbnail} alt="" />
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
