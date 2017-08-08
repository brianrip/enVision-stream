import React from 'react';
import './styles.css';

const Image = ({ urls, likeImage }) => {
  return (
    <div className="grid-item">
      <img className="grid-image" src={ urls.small } alt="Visual content based on search keywords" />
      <button onClick={ () => likeImage() }>LIKE!</button>
    </div>
  )
}

export default Image;
