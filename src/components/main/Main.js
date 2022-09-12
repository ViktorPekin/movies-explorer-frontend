import Promo from './promo/Promo';
import AboutProject from './aboutProject/AboutProject';
import Techs from './techs/Techs';
import AboutMe from './aboutMe/AboutMe';
import Portfolio from './portfolio/Portfolio';
import HeaderMain from '../header/HeaderMain';
import Footer from '../footer/Footer';

function Main() {
  return(
    <main className='main'>
      <HeaderMain/>
      <Promo/>
      <AboutProject/>
      <Techs/>
      <AboutMe/>
      <Portfolio/>
      <Footer/>
    </main>
  )
}

export default Main;
