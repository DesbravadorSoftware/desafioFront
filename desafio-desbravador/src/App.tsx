import './App.css';
import { Route, Routes } from 'react-router';
import { Busca } from './pages/busca/busca';
import { Perfil } from './pages/perfil/perfil';
import { RepositorioDetalhado } from './components/repositorioDetalhado/repositorioDetalhado';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' Component={Busca} />
        <Route path='/perfil' Component={Perfil}/>
        <Route path='/${fullname}' Component={RepositorioDetalhado}/>
      </Routes>
    </div>
  );
}

export default App;
