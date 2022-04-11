import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Rutas } from './Components/Rutas';


function App() {
  return (
    <div className="App">
      <BrowserRouter>  
        <Rutas /> 
      </BrowserRouter>
    </div>
  );
}

export default App;
