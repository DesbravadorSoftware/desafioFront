export interface IUsuarioType {
    nome: string,
    login: string,
    followers: number,
    following: number,
    imagem_avatar: string,
    email: string,
    bio: string
}

export type UsuarioState = {
    usuario: IUsuarioType
}

export type UsuarioAction = {
    type: string
    usuario: IUsuarioType
}

export type DispatchType = (args: UsuarioAction) => UsuarioAction