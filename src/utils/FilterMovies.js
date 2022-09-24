export function filterMovies(name, moviesList, duration) {
  const filterArr = moviesList.filter((el) => el.nameRU.toLowerCase().includes(name.toLowerCase()));
  if (duration) {
    return filterArr.filter((el) => el.duration < 40)
  } else {
    return filterArr.filter((el) => el.duration > 40)
  }
}
