import { ADD_IMAGES, FLASH_MESSAGE } from '../../actionTypes'

const initialState = { images: [], message: '' };

const app = (state = initialState, action) => {
  switch (action.type) {
    case ADD_IMAGES :
      return Object.assign({}, state, { images: action.images });
    case FLASH_MESSAGE :
      return Object.assign({}, state, { message: action.message });
    default :
      return state;
  }
};

export default app;
