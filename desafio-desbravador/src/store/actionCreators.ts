import { IRepositorioType } from "../types/repositorioType";
import { IUsuarioType  } from "../types/usuarioType";
import * as actionTypes from "./actionTypes";

export function getUsuario(usuario: IUsuarioType) {
    return {
        type: actionTypes.GETUSUARIO,
        usuario,
    };
}

export function getRepositorios(repositorios: IRepositorioType[]){
    return {
        type: actionTypes.GETREPOSITORIOS,
        repositorios
    }
}
