const API = 'https://api.themoviedb.org/1';

export const get = async (path) => {
  const result = await fetch(`${API}${path}`, {
    headers: {},
  });
  return await result.json();
};
