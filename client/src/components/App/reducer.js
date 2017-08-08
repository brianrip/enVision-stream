import { GET_IMAGES } from '../../actionTypes'

const initialState = { images: [] };

const app = (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGES :
      return { images: action.images };
    default :
      return state;
  }
};

export default app;
