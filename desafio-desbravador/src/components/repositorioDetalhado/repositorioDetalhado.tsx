import * as RD from "./style";
import { RepositorioState } from "../../types/repositorioType";
import { useSelector } from "react-redux";
import { DetalhePerfil } from "../detalhePerfil/detalhePerfil";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getRepositorio } from "../../store/repositorioReducer";

export const RepositorioDetalhado = () => {
    const navigate = useNavigate();
    const repositorioRedux = useSelector((state: {repositorio: RepositorioState}) => state.repositorio);


    const voltar = () => {
        navigate("/perfil");
    }

    return (
        <RD.Container>
            <DetalhePerfil />
            <RD.RepositorioDetalhado>
                <div style={{ display: "flex", width: "100%", justifyContent: "start", alignItems: "center", position: "sticky", top: "0", backgroundColor: "white" }}>
                    <img alt="seta" src="/icons/seta_esquerda.png" onClick={voltar} />
                    <h1>{repositorioRedux.name != null ? repositorioRedux.name : ""}</h1>
                </div>
                <p>{repositorioRedux.description}</p>
                <div style={{ marginTop: "20px", display: "flex", width: "100%", justifyContent: "start", alignItems: "center" }}>
                    <img alt="estrela" src="/icons/estrela.png" style={{ width: "20px", height: "20px" }} />
                    <label style={{ margin: "0px" }}>{repositorioRedux.name != null ? repositorioRedux.stargazers_count : ""} Estrelas  | </label>
                    <label style={{ marginLeft: "10px", marginTop: "0px" }}>{repositorioRedux.name != null ? repositorioRedux.language : ""}</label>
                </div>
                <div>
                    <label>Link para o repositorio: </label>
                    <a href={repositorioRedux.name != null ? repositorioRedux.html_url : ""}>{repositorioRedux.name != null ? repositorioRedux.html_url : ""}</a>
                </div>
            </RD.RepositorioDetalhado>
        </RD.Container>
    )
}

function dispatch(arg0: any) {
    throw new Error("Function not implemented.");
}
