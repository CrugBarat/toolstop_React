import React, {Fragment} from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <Fragment>
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className="loading-text">LOADING</p>
    </Fragment>
  )
}

export default Loading;
