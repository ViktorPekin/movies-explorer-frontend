import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { mainApi } from "../../utils/MainApi";

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

  useEffect(() => {
    handleCheckedToken();
  }, [])

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
        localStorage.setItem('token', res.token);
        handleCheckedToken();
        navigate('/movies');
      }
    }).catch((err) => {
      setErrorServer(err.message);
    });
  }

  function handleCheckedToken() {
    if (localStorage.getItem('token')) {
      const jwtToken = localStorage.getItem('token');
      mainApi.checkedToken(jwtToken).then((res) => {
        setJwt(jwtToken);
        setloggedIn(true);
        setCurrentUser(res.user);
      }).catch((err) => {
        console.log(err);
      });
    }
  }

  function handleEditProfil(value) {
    mainApi.patchProfile(value, jwt).then((res) => {
      setProfileInfo(`Новое имя: ${res.newUser.name} / Новый E-mail: ${res.newUser.email}`);
    }).catch((err) => {
      setErrorServer(err.message);
    })
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path='/signup' element={
            <Register errorServer={errorServer} onErrorServer={setErrorServer} onRegistration={handleRegistration}/>
          }/>
          <Route path='/signin' element={
            <Login errorServer={errorServer} onErrorServer={setErrorServer} onLogin={handleLogin}/>
          }/>
          <Route path="/" element={
            <Main onOpen={setIsPopupOpen} onLogin={loggedIn}/>
          }/>
          <Route path='/movies' element={
            <ProtectedRoute
            exact path="/"
            loggedIn={loggedIn}
            >
              <Movies onOpen={setIsPopupOpen}/>
            </ProtectedRoute>
          }/>
          <Route path="/saved-movies" element={
            <ProtectedRoute
            exact path="/"
            loggedIn={loggedIn}
            >
              <SavedMovies onOpen={setIsPopupOpen}/>
            </ProtectedRoute>
          }/>
          <Route path="/profile" element={
            <ProtectedRoute
            exact path="/"
            loggedIn={loggedIn}
            >
              <Profile onLogin={setloggedIn}
              profileInfo={profileInfo}
              onProfileInfo={setProfileInfo}
              errorServer={errorServer}
              onErrorServer={setErrorServer}
              onEditProfile={handleEditProfil}
              onOpen={setIsPopupOpen}/>
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
