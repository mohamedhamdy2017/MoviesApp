export const base_url = 'https://api.themoviedb.org/3';
export const api_key = 'api_key=4f298a53e552283bee957836a529baec';

type ARGUMENT = {
  target: string;
};

export const get_request = async ({target}: ARGUMENT) => {
  const url = `${base_url}/${target}`;
  try {
    const result = await fetch(url, {method: 'GET'});
    return await result.json();
  } catch (error) {
    return null;
  }
};
