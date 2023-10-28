import React from "react";
import * as RD from "./style";
import { IRepositorioType } from "../../types/repositorioType";

type props = {
    repositorioSelecionado: IRepositorioType,
    maior: boolean,
    atualizarFiltro: ()=> void;
}

export const RepositorioDetalhado = ({repositorioSelecionado, maior, atualizarFiltro}: props) => {
    console.log(repositorioSelecionado)
    return(
        <RD.Container>
            <div style={{display: "flex", width: "100%",justifyContent: "center", alignItems: "center"}}>
                <h1>{repositorioSelecionado.name}</h1>
                <img alt="filtro" src={maior ? "/icons/ordenar_maior.png" : "/icons/ordenar_menor.png"} onClick={atualizarFiltro}/>
            </div>
            <p>{repositorioSelecionado.description}</p>
            <label>{repositorioSelecionado.language}</label>
            <label>{}</label>
        </RD.Container>
    )
}