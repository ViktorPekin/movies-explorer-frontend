import Header from '../header/Header';
import Footer from '../footer/Footer';
import SearchForm from '../searchForm/SearchForm';
import MoviesCardList from '../moviesCardList/MoviesCardList';
import Preloader from '../movies/preloader/Preloader';

function Movies(props) {
  return(
    <div className='movies'>
      <Header openPopup={props.onOpen}/>
      <SearchForm/>
      <MoviesCardList/>
      <Footer/>
    </div>
  )
}

export default Movies;
