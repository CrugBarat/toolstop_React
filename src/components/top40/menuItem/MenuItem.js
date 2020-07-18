import React, {Fragment} from 'react';
import getImage from '../../../utils/defaultImgMap.js';
import './MenuItem.css';

const MenuItem = ({image, onClick}) => {
  if(!image) return null;

  function handleClick(brand) {
    onClick(brand)
  }

  return (
    <Fragment>
      <img className={image.class} src={image.url} onError={e => e.target.src=getImage(image.name)} alt=""  onClick={() => handleClick(image.brand)}/>
    </Fragment>
  )
}

export default MenuItem;
