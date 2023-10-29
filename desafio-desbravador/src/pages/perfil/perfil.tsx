import React, { useEffect, useState } from "react";
import { DetalhePerfil } from "../../components/detalhePerfil/detalhePerfil";
import * as P from "./style";
import { Repositorios } from "../../components/repositorios/repositorios";
import { useDispatch, useSelector } from "react-redux";
import { UsuarioState } from "../../types/usuarioType";
import { IRepositorioType } from "../../types/repositorioType";

export const Perfil = () => {
    const dispatch = useDispatch();
    const usuario = useSelector((state: {usuario: UsuarioState}) => state.usuario);
    const [repositorios, setRepositorios] = useState<IRepositorioType[] | []>([]);
    
    async function fetchRepositorios() {
        try {
            const response = await fetch(`https://api.github.com/users/${usuario.login}/repos`);
            const data = await response.json();
            setRepositorios(data);
        } catch {

        }
    }
    
    useEffect(() => {
        fetchRepositorios();
    }, [])
    return(
        <P.Container>
            <DetalhePerfil />
            <Repositorios Repositorios={repositorios}/>
        </P.Container>
    )
}