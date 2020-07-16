import React, {Fragment} from 'react';
import MenuList from '../components/MenuList.js';
import Top40ImageData from '../config/Top40ImageData.js';

export default function Top40() {
  return (
    <Fragment>
      <MenuList images={Top40ImageData}/>
    </Fragment>
  )
}
