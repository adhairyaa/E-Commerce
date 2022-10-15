
import './App.css';
import {NavBar} from './NavBar';


import {useLivePageContext} from './LivePageContext';

function App() {
  const {livePage} = useLivePageContext();
  return (
    <div className="App">
      <NavBar />
      <div className="Wrapper">
         <div className='MainContent'>
         {livePage}
         </div>
      </div>
      
    </div>
  );
}

export default App;
