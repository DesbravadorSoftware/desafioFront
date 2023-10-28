import React, { useState } from "react";
import * as R from "./style";
import { Repositorio } from "../repositorio/repositorio";
import { useNavigate } from "react-router-dom";
import { RepositorioDetalhado } from "../repositorioDetalhado/repositorioDetalhado";
import { IRepositorioType, RepositorioState } from "../../types/repositorioType";
import { useSelector } from "react-redux";

export type props = {
    Repositorios: IRepositorioType[]
}

export const Repositorios = ({Repositorios}: props) => {
    const navigate = useNavigate();
    const [listarTodos, setListarTodos] = useState(false);
    const [repositorioAberto, setRepositorioAberto] = useState(false);
    const [maior, setMaior] = useState(true);

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

    const abrir = () => {
        setRepositorioAberto(true);
        alert("executou")
    }

    return (
        <R.Container>
            {repositorioAberto ? (
                <RepositorioDetalhado />
            ) : !listarTodos && !repositorioAberto ? (
                <>
                    <div style={{display: "flex", width: "100%",justifyContent: "center", alignItems: "center"}}>
                        <h1>TOP 6 REPOSITÓRIOS </h1>
                        <img alt="filtro" src={maior ? "/icons/ordenar_maior.png" : "/icons/ordenar_menor.png"} onClick={()=> setMaior(!maior)}/>
                    </div>
                    <R.TopRepositorios>
                        {Array.isArray(top6) && top6.sort(organizarEstrelas).map((repo, index) => {
                            return (
                                <Repositorio Repositorio={repo} ListarTodos={listarTodos} abrir={() => abrir} key={index} />
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
                                <Repositorio Repositorio={repo} ListarTodos={listarTodos} abrir={() => abrir} key={index} />
                            )
                        })}
                    </R.TodosRepositorios>
                </>
            )}
            <R.Button onClick={() => setListarTodos(!listarTodos)}>{listarTodos && !repositorioAberto ? "TOP 6" : "Listar todos"}</R.Button>
        </R.Container>
    )
}