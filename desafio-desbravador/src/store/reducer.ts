import { UsuarioAction, UsuarioState } from "../types/usuarioType"
import { getUsuario } from "./actionCreators"
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

const usuarioReducer = (
    state: UsuarioState = initialState,
    action: UsuarioAction
): UsuarioState => {
    switch (action.type) {
        case actionTypes.GETUSUARIO:
            return {
                ...state,
                usuario: action.usuario
            };
    }
    return state
}

export default usuarioReducer