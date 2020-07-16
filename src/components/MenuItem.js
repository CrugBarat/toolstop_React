import React, {Fragment} from 'react';
import getImage from '../utils/defaultImgMap.js';

const MenuItem = (props) => {
  if(!props.image) return null;

  return (
    <Fragment>
      <img src={props.image.url} onError={e => e.target.src=getImage(props.image.name)} alt="" />
    </Fragment>
  )
}

export default MenuItem;
