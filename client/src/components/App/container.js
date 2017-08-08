import { connect } from 'react-redux';
import { fetchImages, likeImage, fetchRandomImage } from './actions';

import App from './index';

const mapStateToProps = ({ app, user }) => {
  return { images: app.images, user: user }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchImages: () => dispatch(fetchImages()),
    likeImage: (image) => dispatch(likeImage(image)),
    fetchRandomImage: () => dispatch(fetchRandomImage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
