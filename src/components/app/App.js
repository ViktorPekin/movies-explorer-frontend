import { Route, Routes } from "react-router-dom";
import {useEffect, useState } from 'react';

import './App.css';
import Main from '../main/Main';
import Movies from "../movies/Movies";
import Popup from '../popup/Popup';
import SavedMovies from "../savedMovies/SavedMovies";

function App() {
  const [isPopupOpen , setIsPopupOpen] = useState(false);

  function closePopup() {
    setIsPopupOpen(false);
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <Main/>
        }/>
        <Route path='/movies' element={
          <Movies onOpen={setIsPopupOpen}/>
        }/>
        <Route path="/saved-movies" element={
          <SavedMovies/>
        }/>
      </Routes>
      <Popup isOpen={isPopupOpen} closePopup={closePopup}/>
    </div>
  );
}

export default App;
