
import './App.css';
import {NavBar} from './components/NavBar';
import Router from './routes/Router'



function App() {
  
  return (
    <div className="App">
      <NavBar />
      <div className="Wrapper">
         <div className='MainContent'>
         <Router />
         </div>
      </div>
      
    </div>
  );
}

export default App;
