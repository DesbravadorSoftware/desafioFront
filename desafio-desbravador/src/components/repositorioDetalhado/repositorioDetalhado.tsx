import React from "react";
import * as RD from "./style";
import { IRepositorioType } from "../../types/repositorioType";
import { UsuarioState } from "../../types/usuarioType";
import { useSelector } from "react-redux";

type props = {
    repositorioSelecionado: IRepositorioType,
    maior: boolean,
    atualizarFiltro: ()=> void;
}

export const RepositorioDetalhado = () => {

    return(
        <RD.Container>
            <div style={{display: "flex", width: "100%",justifyContent: "center", alignItems: "center"}}>
                <h1>nome</h1>
            </div>
            <p>descricao</p>
            <label>linguagem</label>
            <label>{}</label>
        </RD.Container>
    )
}