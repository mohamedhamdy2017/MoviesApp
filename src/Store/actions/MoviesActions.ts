import {api_key, get_request} from '../../Services';
import {
  GET_GENRES_SUCCESS,
  GET_MOVIES_SUCCESS,
  GET_CREDITS_SUCCESS,
  START_LOADING,
  STOP_LOADING,
} from '../types';

export const get_movies = ({
  type,
  page,
}: {
  type: string;
  page: number;
}) => async (dispatch: any) => {
  try {
    dispatch({type: START_LOADING});
    const response = await get_request({
      target: `movie/${type}?${api_key}&page=${page}`,
    });
    console.log('response-pop', response);
    dispatch({type: STOP_LOADING});
    dispatch({
      type: GET_MOVIES_SUCCESS,
      payload: response.results,
      page: response.page,
    });
  } catch (error) {
    dispatch({type: STOP_LOADING});
    Promise.reject(error);
  }
};

export const get_genres = () => async (dispatch: any) => {
  try {
    dispatch({type: START_LOADING});
    const response = await get_request({target: `genre/movie/list?${api_key}`});
    dispatch({type: GET_GENRES_SUCCESS, payload: response.genres});
    dispatch({type: STOP_LOADING});
  } catch (error) {
    dispatch({type: STOP_LOADING});
    Promise.reject(error);
  }
};

export const get_credits = (movie_id: string) => async (dispatch: any) => {
  try {
    dispatch({type: START_LOADING});
    const response = await get_request({
      target: `movie/${movie_id}/credits?${api_key}`,
    });
    dispatch({type: GET_CREDITS_SUCCESS, payload: response.cast});
    dispatch({type: STOP_LOADING});
  } catch (error) {
    dispatch({type: STOP_LOADING});
    Promise.reject(error);
  }
};
