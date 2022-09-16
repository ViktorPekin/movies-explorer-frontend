import Header from "../header/Header";
import SearchForm from "../searchForm/SearchForm";
import MoviesCardList from "../moviesCardList/MoviesCardList";
import Footer from "../footer/Footer";

function SavedMovies(props) {
  return(
    <div className='saved-movies'>
      <Header openPopup={props.onOpen}/>
      <main>
        <SearchForm/>
        <MoviesCardList savedMovies={true}/>
      </main>
      <Footer/>
    </div>
  )
}

export default SavedMovies;
