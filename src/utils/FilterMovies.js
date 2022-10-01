import { SHORT_MOVIES } from "./constants";

export function filterMovies(name, moviesList, duration) {
  console.log(moviesList)
  console.log(name)
  const filterArr = moviesList.filter((el) => el.nameRU.toLowerCase().includes(name.toLowerCase()));
  if (duration) {
    return filterArr.filter((el) => el.duration < SHORT_MOVIES);
  } else {
    return filterArr.filter((el) => el.duration > SHORT_MOVIES);
  }
}
