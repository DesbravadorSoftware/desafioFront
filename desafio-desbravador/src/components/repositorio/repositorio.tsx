import React from "react";
import * as R from "./style";
type repositorioProps = {
    ListarTodos: boolean,
    abrir: ()=>{}
}

export const Repositorio = ({ListarTodos, abrir}: repositorioProps) => {
    return(
        <R.Container onClick={abrir} style={{height: ListarTodos === true ? "200px": "", width: ListarTodos === true ? "90%" : ""}}>
            <h2>Nome do Repositório</h2>
            <p>Descrição do Repositório</p>
            <label style={{marginTop: "auto"}}><img alt="estrela" src="/icons/estrela.png"/>5 Estrelas</label>
        </R.Container>
    )
}