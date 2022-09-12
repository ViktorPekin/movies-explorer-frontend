import Header from "../header/Header";
import SearchForm from "../searchForm/SearchForm";
import MoviesCardList from "../moviesCardList/MoviesCardList";
import Footer from "../footer/Footer";

function SavedMovies() {
  return(
    <div className='saved-movies'>
      <Header/>
      <SearchForm/>
      <MoviesCardList savedMovies={true}/>
      <Footer/>
    </div>
  )
}

export default SavedMovies;
