import Header from '../header/Header';
import Footer from '../footer/Footer';
import SearchForm from '../searchForm/SearchForm';
import MoviesCardList from '../moviesCardList/MoviesCardList';
import Preloader from '../movies/preloader/Preloader';

function Movies(props) {
  return(
    <div className='movies'>
      <Header openPopup={props.onOpen}/>
      <main>
        <SearchForm
        moviesName={props.moviesName}
        onMovies={props.onMovies}
        onMovieName={props.onMovieName}
        onShortMovies={props.onShortMovies}
        onPreloader={props.onPreloader}
        pageSaveMovies={props.pageSaveMovies}/>
        {props.preloader ? <Preloader/>
        : <MoviesCardList
          amountMovies={props.amountMovies}
          onAmountMovies={props.onAmountMovies}
          finallyMoviesApi={props.finallyMoviesApi}
          errorMoviesApi={props.errorMoviesApi}
          filtredMovies={props.filtredMovies}
          onMovies={props.onMovies}
          pageSaveMovies={props.pageSaveMovies}
          onSavedMovie={props.onSavedMovie}
          myMovies={props.myMovies}
          onDeleteMovie={props.onDeleteMovie}/>}
      </main>
      <Footer/>
    </div>
  )
}

export default Movies;
