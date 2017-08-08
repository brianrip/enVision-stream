import callApi from '../../util/unsplashApi';
import { GET_IMAGES, ADD_LIKED_IMAGE } from '../../actionTypes'

export const addImages = (images) => {
  return {
    type: GET_IMAGES,
    images,
  };
}

export const fetchImages = (keywords) => {
  return (dispatch) => {
    return callApi(`search/photos?query=${keywords}&per_page=20`).then(res => {
      console.log(res);
      dispatch(addImages(res.results));
    });
  };
}

export const likeImage = (id) => {
  console.log('liking image: ', id);
  return {
    type: ADD_LIKED_IMAGE,
    id
  }
}
