import './App.css';
import { Route, Routes } from 'react-router';
import { Busca } from './pages/busca/busca';
import { Perfil } from './pages/perfil/perfil';
import { RepositorioDetalhado } from './components/repositorioDetalhado/repositorioDetalhado';
import { useSelector } from 'react-redux';
import { UsuarioState } from './types/usuarioType';
import { RepositorioState } from './types/repositorioType';

function App() {
  const usuarioRedux = useSelector((state:{usuario: UsuarioState}) => state.usuario);
  const repositorioRedux = useSelector((state: {repositorio: RepositorioState})=> state.repositorio);
  
  return (
    <div className="App">
      <Routes>
        <Route path='' Component={Busca} />
        <Route path='/perfil' Component={usuarioRedux.login != "" ? Perfil : Busca}/>
        <Route path='/:fullname' Component={repositorioRedux.name != "" ? RepositorioDetalhado : Busca}/>
      </Routes>
    </div>
  );
}

export default App;
