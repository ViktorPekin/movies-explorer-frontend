import { Link, NavLink } from "react-router-dom";

function Popup(props) {
  return(
    <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className='popup__container'>
        <button type='button' onClick={props.closePopup} className='popup__exit'></button>
        <div className='popup__link-container'>
          <nav className='popup__links'>
            <NavLink onClick={props.closePopup} className={( { isActive }) => isActive ? 'popup__link_active' : 'popup__link'} to='/'>
              Главная
            </NavLink>
            <NavLink onClick={props.closePopup} className={( { isActive }) => isActive ? 'popup__link_active' : 'popup__link'} to='/movies'>
              Фильмы
            </NavLink>
            <NavLink onClick={props.closePopup} className={( { isActive }) => isActive ? 'popup__link_active' : 'popup__link'} to='/saved-movies'>
              Сохранённые фильмы
            </NavLink>
          </nav>
          <Link onClick={props.closePopup} className='popup__button' to='/profile'>Аккаунт</Link>
        </div>
      </div>
    </div>
  )
}

export default Popup;
