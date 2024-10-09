
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Steps from './components/steps';
import RealStateSectionss from './components/realstate';
import Newsletter from './components/newsletter';
import Cards from './components/cards';
import Header from './layout/header/header';
import CustomNavbar from './layout/header/index';
function App() {
 
  return (
    <div className="App">
    
  <Header/>
     
       <Steps/>
       <Cards/>

    <RealStateSectionss/>
    <Newsletter/>
      {/*   */}
     
    </div>
  );
}

export default App;
