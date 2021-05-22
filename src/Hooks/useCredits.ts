import {useQuery} from 'react-query';
import {api_key, get_request} from '../Services';

export const useCredits = (movie_id: string) => {
  return useQuery(
    ['credits', movie_id],
    () => get_request({target: `movie/${movie_id}/credits?${api_key}`}),
    {
      retry: false,
    },
  );
};
