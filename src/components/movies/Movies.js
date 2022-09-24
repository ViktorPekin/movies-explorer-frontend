import { useState } from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import SearchForm from '../searchForm/SearchForm';
import MoviesCardList from '../moviesCardList/MoviesCardList';
import Preloader from '../movies/preloader/Preloader';

function Movies(props) {
  const [filtredMovies, setFiltredMovies] = useState([]);

  return(
    <div className='movies'>
      <Header openPopup={props.onOpen}/>
      <main>
        <SearchForm onFilterMovies={setFiltredMovies}
        onMovies={props.onMovies}
        allMovies={props.allMovies}
        onPreloader={props.onPreloader}/>
        {props.preloader ? <Preloader/>
        : <MoviesCardList finallyMoviesApi={props.finallyMoviesApi}
          errorMoviesApi={props.errorMoviesApi}
          filtredMovies={filtredMovies}/>}
      </main>
      <Footer/>
    </div>
  )
}

export default Movies;
