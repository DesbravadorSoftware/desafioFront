import React from "react";
import * as D from "./style";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { UsuarioState } from "../../types/usuarioType";

export const DetalhePerfil = () =>{
    const navigate = useNavigate();
    const usuario = useSelector((state: UsuarioState) => state.usuario);

    function buscar(){
        navigate("/");
    }

    const avatarStyle = {
        backgroundImage: `url("${usuario.imagem_avatar}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
    
    return(
        <D.Container>
            <D.Avatar style={avatarStyle}/>
            <div className="dados-perfil">
                <h2>{usuario.nome}</h2>
                <p>{usuario.login}</p>
                <label>{usuario.email}</label>
                <p>{usuario.bio}</p>
            </div>
            <div className="dados-perfil">
                <p>Seguidores: {usuario.followers}</p>
                <p>Seguindo: {usuario.following}</p>
            </div>
            <D.Button onClick={buscar}>Buscar outro usuário</D.Button>
        </D.Container>
    )
}