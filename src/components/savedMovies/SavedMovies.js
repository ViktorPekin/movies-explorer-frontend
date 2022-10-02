import Header from "../header/Header";
import SearchForm from "../searchForm/SearchForm";
import SavedMoviesCardList from "../savedMoviesCardList/SavedMoviesCardList";
import Footer from "../footer/Footer";

function SavedMovies(props) {
  return(
    <div className='saved-movies'>
      <Header openPopup={props.onOpen}/>
      <main>
        <SearchForm pageSaveMovies={props.pageSaveMovies}
          onMovieName={props.onMovieName}
          onShortMovies={props.onShortMovies}
          onFilterMyMovies={props.onFilterMyMovies}
        />
        <SavedMoviesCardList pageSaveMovies={props.pageSaveMovies}
          myMovies={props.myMovies} onMyMovies={props.onMyMovies}
          filerMyMovies={props.filerMyMovies}
          errorMoviesApi={props.errorMoviesApi}
          onDeleteMovie={props.onDeleteMovie}
        />
      </main>
      <Footer/>
    </div>
  )
}

export default SavedMovies;
