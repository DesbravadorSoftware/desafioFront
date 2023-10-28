import React from "react";
import { DetalhePerfil } from "../../components/detalhePerfil/detalhePerfil";
import * as P from "./style";
import { Repositorios } from "../../components/repositorios/repositorios";

export const Perfil = () => {
    return(
        <P.Container>
            <DetalhePerfil />
            <Repositorios />
        </P.Container>
    )
}