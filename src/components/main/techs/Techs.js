function Techs() {
  return(
    <section className='techs'>
      <div className='techs__container'>
        <h2 className='techs__title'>Технологии</h2>
        <div className='techs__border'></div>
        <div className='techs__content'>
          <h3 className='techs__content-title'>7 технологий</h3>
          <p className='techs__content-text'>
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
          </p>
          <ul className='techs__tech-container'>
            <li className='techs__tech'>
              <p className='techs__tech-text'>HTML</p>
            </li>
            <li className='techs__tech'>
              <p className='techs__tech-text'>CSS</p>
            </li>
            <li className='techs__tech'>
              <p className='techs__tech-text'>JS</p>
            </li>
            <li className='techs__tech'>
              <p className='techs__tech-text'>React</p>
            </li>
            <li className='techs__tech'>
              <p className='techs__tech-text'>Git</p>
            </li>
            <li className='techs__tech'>
              <p className='techs__tech-text'>Express.js</p>
            </li>
            <li className='techs__tech'>
              <p className='techs__tech-text'>mongoDB</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Techs;
