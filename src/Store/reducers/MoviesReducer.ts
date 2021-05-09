import {
  START_LOADING,
  STOP_LOADING,
  GET_MOVIES_SUCCESS,
  GET_GENRES_SUCCESS,
  GET_CREDITS_SUCCESS,
} from '../types';

const INIT_STATE = {
  movies: [],
  genres: [],
  credits: [],
  page: 1,
  loading: false,
};

export default (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case START_LOADING: {
      return {...state, loading: true};
    }
    case STOP_LOADING: {
      return {...state, loading: false};
    }
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        page: action.page,
        loading: false,
      };

    case GET_GENRES_SUCCESS:
      return {...state, genres: action.payload, loading: false};

    case GET_CREDITS_SUCCESS:
      return {...state, credits: action.payload, loading: false};

    default:
      return state;
  }
};
