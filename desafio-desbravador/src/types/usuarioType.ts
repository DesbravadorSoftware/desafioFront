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
    nome: string,
    login: string,
    followers: number,
    following: number,
    imagem_avatar: string,
    email: string,
    bio: string
}


