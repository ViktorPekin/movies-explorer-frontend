import Planet from '../../../images/text__COLOR_landing-logo.png';

function Promo() {
  return(
    <div className='promo'>
      <div className='promo__container'>
        <img className='promo__image-planet' src={Planet} alt='Планета'/>
        <div className='promo__text-container'>
          <h1 className='promo__title'>Учебный проект студента факультета {<br/>} Веб-разработки.</h1>
          <p className='promo__text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <button className='promo__learn-more'>Узнать больше</button>
        </div>
      </div>
    </div>
  )
}

export default Promo;
