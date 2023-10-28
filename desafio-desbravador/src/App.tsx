import './App.css';
import { Route, Routes } from 'react-router';
import { Busca } from './pages/busca/busca';
import { Perfil } from './pages/perfil/perfil';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' Component={Busca} />
        <Route path='/perfil' Component={Perfil}/>
      </Routes>
    </div>
  );
}

export default App;
