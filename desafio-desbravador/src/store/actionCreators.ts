import { IRepositorioType } from "../types/repositorioType";
import { IUsuarioType  } from "../types/usuarioType";
import * as actionTypes from "./actionTypes";

// actionCreators.ts
export function getUsuario(usuario: IUsuarioType) {
    return {
        type: actionTypes.GETUSUARIO,
        usuario,
    };
}

export function getRepositorio(repositorio: IRepositorioType) {
    return {
        type: actionTypes.GETREPOSITORIO,
        repositorio,
    };
}
