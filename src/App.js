
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './layout/header/index';
import ProjectCard from './components/project-card';
import { faChevronLeft, faChevronRight, faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RealEstateSection from './components/Transfer-realstate';
import Steps from './components/steps';
import RealStateSectionss from './components/realstate';
import Newsletter from './components/newsletter';




function App() {
 
  return (
    <div className="App">
    
  
       <CustomNavbar/> 
       <Steps/>
       <section  className='containerproject' >
      
      <div className='bgcolor'>
      <div className="project">  
          <div className="project-left">
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
          <ProjectCard />
      </div>
    </section> 
    <RealStateSectionss/>
    <Newsletter/>
      {/*   */}
    </div>
  );
}

export default App;
