
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './layout/header/index';
import ProjectCard from './components/project-card';
import { faChevronLeft, faChevronRight, faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RealEstateSection from './components/Transfer-realstate';
import Steps from './components/steps';



function App() {
 
  return (
    <div className="App">
    
  
       <CustomNavbar/> 
       <Steps/>
     
     <section  >
      <div className="header">  
          <div className="header-left">
            <p>Best Project of the Years</p>
            <h2>Our recent projects</h2>
          </div>
          <div className="navigation">
              <button className="nav-button1">
              <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button className="nav-button">
              <FontAwesomeIcon icon={faChevronRight} />
              </button>
          </div>
          </div>
          <ProjectCard/>
    </section> 
       <RealEstateSection/>
       
    </div>
  );
}

export default App;
