import { connect } from 'react-redux';
import { fetchImages, likeImage } from './actions';

import App from './index';

const mapStateToProps = ({ app }) => {
  return { images: app.images }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchImages: (keywords) => dispatch(fetchImages(keywords)),
    likeImage: (id) => dispatch(likeImage(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
