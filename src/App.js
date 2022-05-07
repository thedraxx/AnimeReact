import { BrowserRouter } from 'react-router-dom';
import { Rutas } from './Components/Rutas';
import './styles/Styles.scss';

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
