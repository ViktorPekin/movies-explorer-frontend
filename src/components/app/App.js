import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from 'react';
import {CurrentUserContext} from '../../context/CurrentUserContext';
import { mainApi } from "../../utils/MainApi";

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

  function closePopup() {
    setIsPopupOpen(false);
  }

  function handleRegistration(value) {
    mainApi.registrationUser(value).then((res) => {
      if (res) {
        handleLogin(value);
      } else {

      }
    }).catch((err) => {
      console.log(err);
    });
  }

  function handleLogin(value) {
    mainApi.authUser(value).then((res) => {
      if (res.token) {
        localStorage.setItem('token', res.token);
        handleCheckedToken();
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  function handleCheckedToken(jwt) {
    if (localStorage.getItem('token')) {
      const jwtToken = localStorage.getItem('token');
      mainApi.checkedToken(jwtToken).then((res) => {
        setJwt(jwtToken);
        setloggedIn(true);
        navigate('/movies');
        setCurrentUser(res.user);
      }).catch((err) => {
        console.log(err);
      });
    }
  }

  function handleEditProfil(value) {
    mainApi.patchProfile(value, jwt).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path='/signup' element={
            <Register onRegistration={handleRegistration}/>
          }/>
          <Route path='/signin' element={
            <Login onLogin={handleLogin}/>
          }/>
          <Route path="/" element={
            <Main/>
          }/>
          <Route path='/movies' element={
            <Movies onOpen={setIsPopupOpen}/>
          }/>
          <Route path="/saved-movies" element={
            <SavedMovies onOpen={setIsPopupOpen}/>
          }/>
          <Route path="/profile" element={
            <Profile onEditProfile={handleEditProfil} onOpen={setIsPopupOpen}/>
          }/>
          <Route path="*" element={
            <NotFound/>
          }/>
        </Routes>
        <Popup isOpen={isPopupOpen} closePopup={closePopup}/>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
