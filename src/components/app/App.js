import { Route, Routes } from "react-router-dom";
import {useEffect, useState } from 'react';

import Register from '../Register/Register';
import Main from '../main/Main';
import Movies from "../movies/Movies";
import Popup from '../popup/Popup';
import SavedMovies from "../savedMovies/SavedMovies";
import Profile from "../profile/Profile";
import Login from '../Login/Login';

function App() {
  const [isPopupOpen , setIsPopupOpen] = useState(false);

  function closePopup() {
    setIsPopupOpen(false);
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/signup' element={
           <Register/>
        }/>
        <Route path='/signin' element={
          <Login/>
        }/>
        <Route path="/" element={
          <Main/>
        }/>
        <Route path='/movies' element={
          <Movies onOpen={setIsPopupOpen}/>
        }/>
        <Route path="/saved-movies" element={
          <SavedMovies/>
        }/>
        <Route path="/profile" element={
          <Profile/>
        }/>
      </Routes>
      <Popup isOpen={isPopupOpen} closePopup={closePopup}/>
    </div>
  );
}

export default App;
