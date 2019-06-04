import React from 'react';
import './SeasonDisplay.css';
const seasonConfig = {
  summer:{
    text:"Let's Hit The Beach",
    icon:'http://pngimg.com/uploads/sun/sun_PNG13430.png'
  },
  winter:{
    text:"Burr, it's chilly",
    icon:'http://clipart-library.com/images/piqr5d9AT.png'
  }
}
const getSeason = (lat,month) => {
  let season='';
  if(month > 2 && month < 9){
    season = lat > 0 ? 'summer' : 'winter';
  }else{
    season = lat <= 0 ? 'summer' : 'winter';
  }
  return season;
}
const SeasonDisplay = (props) => {

  const season = getSeason(props.latitude,props.month);
  return (
    <div className={`season-display-container ${season}`}>
      <div className='top-icon'><img className='season-img' src={seasonConfig[season].icon}/></div>
      <div className='content'><p className='content-text'>{seasonConfig[season].text}!</p></div>
      <div className='bottom-icon'><img className='season-img' src={seasonConfig[season].icon}/></div>
    </div>
  )
};
export default SeasonDisplay;
