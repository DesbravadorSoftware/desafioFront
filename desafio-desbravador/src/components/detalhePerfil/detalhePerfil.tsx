import React from "react";
import * as D from "./style";
import { useNavigate } from "react-router-dom";

export const DetalhePerfil = () =>{
    const navigate = useNavigate();

    function buscar(){
        navigate("/");
    }
    
    return(
        <D.Container>
            <D.Avatar/>
            <div className="dados-perfil">
                <h2>Mylenna ALcantara</h2>
                <p>MylennaAlcantara</p>
                <p>Descrição da BIO</p>
            </div>
            <div className="dados-perfil">
                <p>Seguidores: </p>
                <p>Seguindo: </p>
            </div>
            <D.Button onClick={buscar}>Buscar outro usuário</D.Button>
        </D.Container>
    )
}