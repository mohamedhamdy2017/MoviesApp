import {useQuery} from 'react-query';
import {api_key, get_request} from '../Services';

export const useGeners = () => {
  return useQuery(
    'geners',
    () => get_request({target: `genre/movie/list?${api_key}`}),
    {
      retry: false,
    },
  );
};
