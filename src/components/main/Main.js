import Promo from './promo/Promo';
import AboutProject from './aboutProject/AboutProject';
import Techs from './techs/Techs';
import AboutMe from './aboutMe/AboutMe';
import Portfolio from './portfolio/Portfolio';

function Main() {
  return(
    <main className='main'>
      <Promo/>
      <AboutProject/>
      <Techs/>
      <AboutMe/>
      <Portfolio/>
    </main>
  )
}

export default Main;
