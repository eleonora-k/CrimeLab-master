import React from 'react';
import { SThumbnailImage } from '../styles/SThumbnailImage';

const ThumbImage = ({ image, title, text }) => (
  <SThumbnailImage image={image}>
    <div className="thumbnail-content">
      <div className="thumbnail-text">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  </SThumbnailImage>
)

export default ThumbImage;