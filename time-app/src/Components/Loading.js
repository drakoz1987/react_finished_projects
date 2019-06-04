import React from 'react';
import './Loading.css';

const Loading = (props) => {
  return(
    <div className='ui segment loading-container'>
      <div className='ui active dimmer'>
        <div className='ui text loader'>{props.input}</div>
      </div>
      <p></p>
    </div>
  )
}

Loading.defaultProps = {
  input: "Loading...",
}

export default Loading;
