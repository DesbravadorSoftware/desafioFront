import { IUsuarioType, UsuarioState } from "../types/usuarioType"
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: UsuarioState = {
    nome: "",
    login: "",
    followers: 0,
    following: 0,
    imagem_avatar: "",
    email: "",
    bio: ""
};

const usuarioSlice = createSlice({
    name: 'usuario',
    initialState,
    reducers: {

        getUsuario: (state, action: PayloadAction<IUsuarioType>) => {
            return {
                ...state,
                ...action.payload
            };
        },

    },
});

export const { getUsuario } = usuarioSlice.actions;
export default usuarioSlice.reducer;