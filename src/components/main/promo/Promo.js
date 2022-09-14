import Planet from '../../../images/text__COLOR_landing-logo.png';

function Promo() {
  return(
    <section className='promo'>
      <div className='promo__container container'>
        <img className='promo__image-planet' src={Planet} alt='Планета'/>
        <div className='promo__text-container'>
          <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
          <p className='promo__text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <a className='promo__learn-more' href='#about-progect'>Узнать больше</a>
        </div>
      </div>
    </section>
  )
}

export default Promo;
