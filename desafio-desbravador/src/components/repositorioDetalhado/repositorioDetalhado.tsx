import React, { useEffect } from "react";
import * as RD from "./style";
import { IRepositorioType } from "../../types/repositorioType";
import { UsuarioState } from "../../types/usuarioType";
import { useSelector } from "react-redux";
import { DetalhePerfil } from "../detalhePerfil/detalhePerfil";
import { useNavigate } from "react-router-dom";

export const RepositorioDetalhado = () => {
    const navigate = useNavigate();
    const data = localStorage.getItem("repositorio");
    const repositorio = data != null ? JSON.parse(data) : null;

    const voltar = () => {
        navigate("/perfil");
        localStorage.removeItem("repositorio");
    }

    return (
        <RD.Container>
            <DetalhePerfil />
            <RD.RepositorioDetalhado>
                <div style={{ display: "flex", width: "100%", justifyContent: "start", alignItems: "center" }}>
                    <img alt="seta" src="/icons/seta-esquerda.png" onClick={voltar}/>
                    <h1>{repositorio.name}</h1>
                </div>
                <p>{repositorio.description}</p>
                <div style={{marginTop: "20px", display: "flex", width: "100%",justifyContent: "start", alignItems: "center"}}>
                    <img alt="estrela" src="/icons/estrela.png" style={{width: "20px", height: "20px"}}/>
                    <label style={{margin: "0px"}}>{repositorio.stargazers_count} Estrelas  | </label>
                    <label style={{marginLeft: "10px",marginTop: "0px"}}>{repositorio.language}</label>
                </div>
                <div>
                    <label>Link para o repositorio: </label>
                    <a href={repositorio.html_url}>{repositorio.html_url}</a>
                </div>
            </RD.RepositorioDetalhado>
        </RD.Container>
    )
}