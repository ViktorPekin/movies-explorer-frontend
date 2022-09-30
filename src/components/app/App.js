import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { mainApi } from "../../utils/MainApi";
import { moviesApi } from "../../utils/MoviesApi";
import {filterMovies} from "../../utils/FilterMovies";

import ProtectedRouteAuth from '../protectedRoute/ProtectedRouteAuth';
import ProtectedRoute from '../protectedRoute/ProtectedRoute';
import Register from '../Register/Register';
import Main from '../main/Main';
import Movies from "../movies/Movies";
import Popup from '../popup/Popup';
import SavedMovies from "../savedMovies/SavedMovies";
import Profile from "../profile/Profile";
import Login from '../Login/Login';
import NotFound from "../notFound/NotFound";

function App() {
  const navigate = useNavigate();
  const [isPopupOpen , setIsPopupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [jwt, setJwt] = useState('');
  const [loggedIn, setloggedIn] = useState(false);
  const [errorServer, setErrorServer] = useState('');
  const [profileInfo, setProfileInfo] = useState('');
  const [errorMoviesApi, setErrorMoviesApi] = useState('');
  const [finallyMoviesApi, setFinallyMoviesApi] = useState(true);
  const [preloader, setPreloader] = useState(false);
  const [allMoviesApi, setAllMoviesApi] = useState([]);
  const [filtredMovies, setFiltredMovies] = useState([]);
  const [amountMovies, setAmountMovies] = useState(0);
  const [moviesName, setMoviesName] = useState('');
  const [sevedMoviesName, setSevedMoviesName] = useState('');
  const [shortMovies, setShortMovies] = useState(false);
  const [myMovies, setMyMovies] = useState([])
  const [filerMyMovies, setFilterMyMovies] = useState([]);

  useEffect(() => {
    handleCheckedToken();
    setMoviesName(localStorage.getItem('movies-name'));
    setSevedMoviesName(localStorage.getItem('movies-name'));
    setShortMovies(JSON.parse(localStorage.getItem('short-movies')));
    setFiltredMovies(checkedMovie());
  }, []);

  function checkedMovie() {
    if (JSON.parse(localStorage.getItem('movies-saved-list')) === null) {
      setFinallyMoviesApi(false);
      return [];
    } else if (JSON.parse(localStorage.getItem('movies-saved-list')).length === 0){
      setFinallyMoviesApi(false);
      return JSON.parse(localStorage.getItem('movies-saved-list'));
    } else {
      setFinallyMoviesApi(true);
      return JSON.parse(localStorage.getItem('movies-saved-list'));
    }
  }

  function closePopup() {
    setIsPopupOpen(false);
  }

  function handleRegistration(value) {
    mainApi.registrationUser(value).then((res) => {
      handleLogin(value);
    }).catch((err) => {
      setErrorServer(err.message);
    });
  }

  function handleLogin(value) {
    mainApi.authUser(value).then((res) => {
      if (res.token) {
        setloggedIn(true);
        localStorage.setItem('token', res.token);
        navigate('/movies');
        handleCheckedToken();
      }
    }).catch((err) => {
      setErrorServer(err.message);
    });
  }

  function handleCheckedToken() {
    if (localStorage.getItem('token')) {
      const jwtToken = localStorage.getItem('token');
      mainApi.checkedToken(jwtToken).then((res) => {
        localStorage.setItem('login', true);
        setJwt(jwtToken);
        setloggedIn(true);
        setCurrentUser(res.user);
        getMyMovies(jwtToken);
      }).catch((err) => {
        console.log(err);
      });
    }
  }

  function getMyMovies(jwtToken) {
    mainApi.getMovies(jwtToken).then((res) => {
      setMyMovies(res.movie);
      setFilterMyMovies(res.movie);
    }).catch((err) => {
      setErrorMoviesApi(err.message);
    })
  }

  function handleEditProfil(value) {
    mainApi.patchProfile(value, jwt).then((res) => {
      setCurrentUser(res.newUser);
      setProfileInfo(`Новое имя: ${res.newUser.name} / Новый E-mail: ${res.newUser.email}`);
    }).catch((err) => {
      setErrorServer(err.message);
    })
  }

  function savedMovie(value) {
    mainApi.savedMovie(value, jwt).then((res) => {
      getMyMovies(jwt);
    }).catch((err) => {
      console.log(err);
    })
  }

  function filtredMyMovies() {
    setFilterMyMovies(filterMovies(moviesName, myMovies, shortMovies))
  }

  function getMovies() {
    moviesApi.getMovies().then((res) => {
      setAllMoviesApi(res);
      setFiltredMovies(res);
      setSevedMoviesName(moviesName);
      localStorage.setItem('movies-name', moviesName);
      localStorage.setItem('short-movies', JSON.stringify(shortMovies));
      localStorage.setItem('movies-saved-list', JSON.stringify(res));
    }).catch((err) => {
      setErrorMoviesApi(err.message);
    }).finally(() => {
      setPreloader(false);
      setFinallyMoviesApi(true);
    })
  }

  async function filtredMoviesApi() {
    return filterMovies(moviesName, allMoviesApi, shortMovies);
  }

  function addInfoMovies() {
    if (allMoviesApi.length > 0) {
      filtredMoviesApi().then(res => {
        setFiltredMovies(res);
        setSevedMoviesName(moviesName);
        localStorage.setItem('movies-name', moviesName);
        localStorage.setItem('short-movies', JSON.stringify(shortMovies));
        localStorage.setItem('movies-saved-list', JSON.stringify(res));
      }).catch((err) => {
        console.log(err);
      }).finally(() => {
        setPreloader(false);
        setFinallyMoviesApi(true);
      });
    } else {
      getMovies();
    }
  }

  function deleteSavedMovie(card) {
    mainApi.deleteMovie(card._id, jwt).then(() => {
      setMyMovies((state) => state.filter((c) => c._id !== card._id));
      setFilterMyMovies((state) => state.filter((c) => c._id !== card._id));
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path='/signup' element={
            <ProtectedRouteAuth
            path="/"
            loggedIn={loggedIn ? loggedIn : localStorage.getItem('token')}
            >
              <Register errorServer={errorServer} onErrorServer={setErrorServer} onRegistration={handleRegistration}/>
            </ProtectedRouteAuth>
          }/>
          <Route path='/signin' element={
            <ProtectedRouteAuth
            path="/"
            loggedIn={loggedIn ? loggedIn : localStorage.getItem('token')}
            >
              <Login errorServer={errorServer} onErrorServer={setErrorServer} onLogin={handleLogin}/>
            </ProtectedRouteAuth>
          }/>
          <Route path="/" element={
            <Main onOpen={setIsPopupOpen} onLogin={loggedIn}/>
          }/>
          <Route path='/movies' element={
            <ProtectedRoute
            path="/"
            loggedIn={loggedIn ? loggedIn : localStorage.getItem('token')}
            >
              <Movies onOpen={setIsPopupOpen}
              myMovies={myMovies}
              onMovieName={setMoviesName}
              moviesName={sevedMoviesName}
              onShortMovies={setShortMovies}
              amountMovies={amountMovies}
              onAmountMovies={setAmountMovies}
              onMovies={addInfoMovies}
              filtredMovies={filtredMovies}
              errorMoviesApi={errorMoviesApi}
              onPreloader={setPreloader}
              preloader={preloader}
              onSavedMovie={savedMovie}
              pageSaveMovies={false}
              onDeleteMovie={deleteSavedMovie}
              finallyMoviesApi={finallyMoviesApi}
              />
            </ProtectedRoute>
          }/>
          <Route path="/saved-movies" element={
            <ProtectedRoute
            exact path="/"
            loggedIn={loggedIn ? loggedIn : localStorage.getItem('token')}
            >
              <SavedMovies onOpen={setIsPopupOpen}
              myMovies={myMovies}
              onMyMovies={getMyMovies}
              onFilterMyMovies={filtredMyMovies}
              onSavedMovie={savedMovie}
              onMovieName={setMoviesName}
              onShortMovies={setShortMovies}
              pageSaveMovies={true}
              filerMyMovies={filerMyMovies}
              errorMoviesApi={errorMoviesApi}
              onDeleteMovie={deleteSavedMovie}
              />
            </ProtectedRoute>
          }/>
          <Route path="/profile" element={
            <ProtectedRoute
            exact path="/"
            loggedIn={loggedIn ? loggedIn : localStorage.getItem('token')}
            >
              <Profile onLogin={setloggedIn}
              profileInfo={profileInfo}
              onProfileInfo={setProfileInfo}
              errorServer={errorServer}
              onErrorServer={setErrorServer}
              onEditProfile={handleEditProfil}
              onOpen={setIsPopupOpen}
              onSevedMoviesName={setSevedMoviesName}
              onFiltredMovies={setFiltredMovies}
              onAllMoviesApi={setAllMoviesApi}/>
            </ProtectedRoute>
          }/>
          <Route path="*" element={
            <NotFound/>
          }/>
        </Routes>
        <Popup isOpen={isPopupOpen}
        closePopup={closePopup}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
