import * as R from "./style";
import { IRepositorioType } from "../../types/repositorioType";

type repositorioProps = {
    Repositorio: IRepositorioType,
    ListarTodos: boolean,
    abrir: (repo: IRepositorioType) => void;
}

export const Repositorio = ({Repositorio, ListarTodos, abrir}: repositorioProps) => {
    const handleClick = () => {
        abrir(Repositorio);
    };
    return(
        <R.Container onClick={handleClick} style={{height: ListarTodos ? "200px": "", width: ListarTodos ? "90%" : "", padding: ListarTodos ? "10px" : ""}}>
            <h2 style={{margin: ListarTodos ? "10px" : ""}}>{Repositorio.name}</h2>
            <p>{Repositorio.description}</p>
            <div style={{marginTop: "auto", display: "flex", width: "100%",justifyContent: "start", alignItems: "center"}}>
                <img alt="estrela" src="/icons/estrela.png"/>
                <label style={{margin: ListarTodos ? "10px" : ""}}>{Repositorio.stargazers_count} Estrelas  | </label>
                <label style={{marginLeft: "10px"}}>{Repositorio.language}</label>
            </div>
        </R.Container>
    )
}