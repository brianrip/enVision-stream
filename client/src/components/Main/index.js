import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';

import Image from '../Image';
import './styles.css';

const renderInstructions = (toggleInstructions) => {
  return (
    <article className="instructions">
      <p>To personalize your feed, click on the images you like.</p>
      <p>EnVision will intelligently customize the images you see based on these preferences.</p>
      <button onClick={ toggleInstructions.bind(this) }>Got it!</button>
    </article>
  )
}

const renderImages = (images, likeImage) => {
  return images.map((image, id) => {
    return (
      <Image
        urls={ image.urls }
        key={ image._id }
        likeImage={ () => likeImage(image) }
      />
    );
  });
}

const masonryOptions = {
  transitionDuration: '0.8s',
  gutter: 20,
  isFitWidth: true
};

const Main = ({ images, showInstructions, toggleInstructions, likeImage }) => {
  return (
    <main>
      { showInstructions ? renderInstructions(toggleInstructions) : null }
      <Masonry
        className="grid"
        options={ masonryOptions }
      >
        { images ? renderImages(images, likeImage) : <p>No Images</p> }
      </Masonry>
    </main>
  )
}

// Main.propTypes = {
//   images: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     urls: PropTypes.object.isRequired
//   })).isRequired
// };

export default Main;
