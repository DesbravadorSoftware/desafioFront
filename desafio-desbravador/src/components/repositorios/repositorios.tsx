import React, { useState } from "react";
import * as R from "./style";
import { Repositorio } from "../repositorio/repositorio";
import { useNavigate } from "react-router-dom";
import { RepositorioDetalhado } from "../repositorioDetalhado/repositorioDetalhado";
import { IRepositorioType, RepositorioState } from "../../types/repositorioType";
import { useSelector } from "react-redux";
import { UsuarioState } from "../../types/usuarioType";

export type props = {
    Repositorios: IRepositorioType[]
}

export const Repositorios = ({Repositorios}: props) => {
    const navigate = useNavigate();
    const usuario = useSelector((state: UsuarioState) => state.usuario);
    const [listarTodos, setListarTodos] = useState(false);
    const [maior, setMaior] = useState(true);
    const [repositorioSelecionado, setRepositorioSelecionado] = useState<IRepositorioType>({
        name: "", 
        description: "", 
        stargazers_count: 0, 
        language: "",
        full_name: "",
        html_url: ""
    });
    const [readme, setReadme] = useState("");

    //const repositorios = useSelector((state:  RepositorioState ) => state.repositorios);

    const top6 = Repositorios.sort(organizarEstrelas).slice(0, 6);

    function organizarEstrelas(a: IRepositorioType, b: IRepositorioType){
        if(maior){
            if(a.stargazers_count > b.stargazers_count){
                return -1;
            }else if(a.stargazers_count < b.stargazers_count){
                return 1;
            }else{
                return 0;
            }
        }else{
            if(a.stargazers_count > b.stargazers_count){
                return 1;
            }else if(a.stargazers_count < b.stargazers_count){
                return -1;
            }else{
                return 0;
            }
        }
    }

    
    async function fetchRepositorio(repo: IRepositorioType) {
        const response = await fetch(`https://api.github.com/repos/${repo.full_name}`)
        const data = await response.json();
        setRepositorioSelecionado(data);
        localStorage.setItem("repositorio", JSON.stringify(data));
    }

    const abrir = async(repo: IRepositorioType) => {
        await fetchRepositorio(repo);
        navigate(`/${repo.name}`);
    }

    return (
        <R.Container>
            {!listarTodos ? (
                <>
                    <div style={{display: "flex", width: "100%",justifyContent: "center", alignItems: "center"}}>
                        <h1>TOP 6 REPOSITÓRIOS </h1>
                        <img alt="filtro" src={maior ? "/icons/ordenar_maior.png" : "/icons/ordenar_menor.png"} onClick={()=> setMaior(!maior)}/>
                    </div>
                    <R.TopRepositorios>
                        {Array.isArray(top6) && top6.sort(organizarEstrelas).map((repo, index) => {
                            return (
                                <Repositorio Repositorio={repo} ListarTodos={listarTodos}  abrir={(repo) => abrir(repo)} key={index} />
                            )
                        })}
                    </R.TopRepositorios>
                </>
            ) : (
                <>
                    <div style={{display: "flex", width: "100%",justifyContent: "center", alignItems: "center"}}>
                        <h1>REPOSITÓRIOS</h1>
                        <img alt="filtro" src={maior ? "/icons/ordenar_maior.png" : "/icons/ordenar_menor.png"} onClick={()=> setMaior(!maior)}/>
                    </div>
                    <R.TodosRepositorios>
                        {Array.isArray(Repositorios) && Repositorios.sort(organizarEstrelas).map((repo, index) => {
                            return (
                                <Repositorio Repositorio={repo} ListarTodos={listarTodos} abrir={(repo) => abrir(repo)} key={index} />
                            )
                        })}
                    </R.TodosRepositorios>
                </>
            )}
            <R.Button onClick={() => setListarTodos(!listarTodos)}>{listarTodos ? "TOP 6" : "Listar todos"}</R.Button>
        </R.Container>
    )
}