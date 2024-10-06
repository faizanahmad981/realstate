
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './layout/header/index';

import { faChevronLeft, faChevronRight, faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Steps from './components/steps';
import RealStateSectionss from './components/realstate';
import Newsletter from './components/newsletter';
import Cards from './components/cards';





function App() {
 
  return (
    <div className="App">
    
  
       <CustomNavbar/> 
       <Steps/>
       <Cards/>

    <RealStateSectionss/>
    <Newsletter/>
      {/*   */}
     
    </div>
  );
}

export default App;
