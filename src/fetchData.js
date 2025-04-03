

import.meta.env.VITE_RAPID_API_KEY


export const exerciseOptions = {
  method: "GET",
  headers: {
   "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  "x-rapidapi-key": "d02e128190msh995522601d66551p1b3d86jsn372c2127757e"
  },
};


export const YoutubeOptions = {
  method: "GET",
  headers: {
   "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
  "x-rapidapi-key": "d02e128190msh995522601d66551p1b3d86jsn372c2127757e"
  },
};

export const fetchData = async (URL, options) => {
  const response = await fetch(URL, options);
  const data = await response.json();
  return data;
};
