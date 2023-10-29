import './App.css';
import { Route, Routes } from 'react-router';
import { Busca } from './pages/busca/busca';
import { Perfil } from './pages/perfil/perfil';
import { RepositorioDetalhado } from './components/repositorioDetalhado/repositorioDetalhado';
import { useSelector } from 'react-redux';
import { UsuarioState } from './types/usuarioType';
import { IRepositorioType, RepositorioState } from './types/repositorioType';

function App() {
  const usuario = useSelector((state: UsuarioState) => state.usuario);
  //const repositorioRedux = useSelector((state: RepositorioState)=> state.repositorio);
  const data = localStorage.getItem("repositorio");
  const repositorio = data != null ? JSON.parse(data) : null;
  
  return (
    <div className="App">
      <Routes>
        <Route path='' Component={Busca} />
        <Route path='/perfil' Component={usuario.login != "" ? Perfil : Busca}/>
        <Route path='/:fullname' Component={usuario.login != "" ? RepositorioDetalhado : Busca}/>
      </Routes>
    </div>
  );
}

export default App;
