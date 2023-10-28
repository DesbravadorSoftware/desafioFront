import { UsuarioAction, UsuarioState } from "../types/usuarioType"
import * as actionTypes from "./actionTypes"

const initialState: UsuarioState = {    
    usuario: {
        nome: "",
        login: "",
        followers: 0,
        following: 0,
        imagem_avatar: "",
        email: "",
        bio: ""
    }
}

const reducer = (
    state: UsuarioState = initialState,
    action: UsuarioAction
): UsuarioState => {
    switch (action.type) {
        case actionTypes.GETUSUARIO:
            return {
                ...state,
                usuario: {
                    nome: action.usuario.nome,
                    login: action.usuario.login,
                    followers: action.usuario.followers,
                    following: action.usuario.following,
                    imagem_avatar: action.usuario.imagem_avatar,
                    email: action.usuario.email,
                    bio: action.usuario.bio
                }
            };
    }
    return state
}

export default reducer