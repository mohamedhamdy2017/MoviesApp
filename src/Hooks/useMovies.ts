import {useInfiniteQuery} from 'react-query';
import {api_key, get_request} from '../Services';

export const useMovies = (type: string, pageNumber: number) => {
  return useInfiniteQuery(
    ['movies', pageNumber],
    ({queryKey}) => {
      const [, page] = queryKey;
      return get_request({target: `movie/${type}?${api_key}&page=${page}`});
    },
    {
      retry: false,
      keepPreviousData: true,
    },
  );
};
