
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './layout/header/index';

import { faChevronLeft, faChevronRight, faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Steps from './components/steps';
import RealStateSectionss from './components/realstate';
import Newsletter from './components/newsletter';
import Cards from './components/cards';
import Header from './layout/header/header';





function App() {
 
  return (
    <div className="App">
    
  <Header/>
      {/*  <CustomNavbar/>  */}
       <Steps/>
       <Cards/>

    <RealStateSectionss/>
    <Newsletter/>
      {/*   */}
     
    </div>
  );
}

export default App;
