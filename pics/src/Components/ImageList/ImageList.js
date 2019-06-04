import React from 'react';
import './ImageList.css';
import ImageCard from '../ImageCard/ImageCard'
//import masonry from 'masonry-layout';

const ImageList = (props) => {
  return (
      <div className='img-container'>
          <h1>Your Search Found {props.imageList.length}</h1>
          <div className='image-gallery'>
              {props.imageList.map((item)=>{
                  return <ImageCard image={item} />
              })}
          </div>
      </div>)
};

export default ImageList;
