import React from "react";
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
        <R.Container onClick={handleClick} style={{height: ListarTodos === true ? "200px": "", width: ListarTodos === true ? "90%" : ""}}>
            <h2>{Repositorio.name}</h2>
            <p>{Repositorio.description}</p>
            <div style={{marginTop: "auto", display: "flex", width: "100%",justifyContent: "start", alignItems: "center"}}>
                <img alt="estrela" src="/icons/estrela.png"/>
                <label>{Repositorio.stargazers_count} Estrelas  | </label>
                <label style={{marginLeft: "10px"}}>{Repositorio.language}</label>
            </div>
        </R.Container>
    )
}