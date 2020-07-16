import React, {Fragment} from 'react';
import MenuItem from './MenuItem';

const MenuList = (props) => {
  const menuItem = props.images.map((image, index) => {
    return <MenuItem image={image} key={index}/>
  });

  return(
    <Fragment>
      {menuItem}
    </Fragment>
  )
}

export default MenuList;
