import React, { useState } from "react";
import * as R from "./style";
import { Repositorio } from "../repositorio/repositorio";
import { useNavigate } from "react-router-dom";
import { RepositorioDetalhado } from "../repositorioDetalhado/repositorioDetalhado";

export const Repositorios = () => {
    const navigate = useNavigate();
    const [listarTodos, setListarTodos] = useState(false);
    const [repositorioAberto, setRepositorioAberto] = useState(false);
    
    const abrir = () =>{
        setRepositorioAberto(true);
    }
    return(
        <R.Container>
            {repositorioAberto ? (
                <RepositorioDetalhado/>
            ) : !listarTodos && !repositorioAberto ? (
                <>
                    <h1>TOP 6 REPOSITÓRIOS</h1>
                    <R.TopRepositorios>
                        <Repositorio ListarTodos={listarTodos} abrir={()=>abrir}/>
                        <Repositorio ListarTodos={listarTodos} abrir={()=>abrir}/>
                        <Repositorio ListarTodos={listarTodos} abrir={()=>abrir}/>
                        <Repositorio ListarTodos={listarTodos} abrir={()=>abrir}/>
                        <Repositorio ListarTodos={listarTodos} abrir={()=>abrir}/>
                        <Repositorio ListarTodos={listarTodos} abrir={()=>abrir}/>
                    </R.TopRepositorios>
                </>
            ):(
                <>
                    <h1>REPOSITÓRIOS</h1>
                    <R.TodosRepositorios>
                        <Repositorio ListarTodos={listarTodos} abrir={()=>abrir}/>
                        <Repositorio ListarTodos={listarTodos} abrir={()=>abrir}/>
                        <Repositorio ListarTodos={listarTodos} abrir={()=>abrir}/>
                        <Repositorio ListarTodos={listarTodos} abrir={()=>abrir}/>
                        <Repositorio ListarTodos={listarTodos} abrir={()=>abrir}/>
                        <Repositorio ListarTodos={listarTodos} abrir={()=>abrir}/>
                    </R.TodosRepositorios>
                </>
            )}
            <R.Button onClick={()=> setListarTodos(!listarTodos)}>{listarTodos && !repositorioAberto ? "TOP 6" : "Listar todos"}</R.Button>
        </R.Container>
    )
}