import * as envisionApi from '../../util/envisionApi';
import { ADD_IMAGES, ADD_LIKED_IMAGE, FLASH_MESSAGE } from '../../actionTypes'

export const fetchRandomImage = () => {
  console.log('fetching random image')
  return (dispatch) => {
    return envisionApi.getRandomImage(`images/oneRandom`).then(res => {
      dispatch(addImages(res.images))
    });
  };
}

export const addImages = (images) => {
  return {
    type: ADD_IMAGES,
    images,
  };
}

export const fetchImages = (keywords) => {
  return (dispatch) => {
    return envisionApi.getRandomImages(`images/random`).then(res => {
      console.log(res);
      dispatch(addImages(res.images));
    });
  };
}

export const notifyUser = (message) => {
  return {
    type: FLASH_MESSAGE,
    message,
  }
}
export const likeImage = (image) => {
  console.log('liking image: ', image);
  return (dispatch) => {
    return envisionApi.followInterest('followInterest', 'post', { "target": image.interest} ).then(res => {
      console.log(res);
      dispatch(notifyUser(image.interestTitle));
    });
  };
}
