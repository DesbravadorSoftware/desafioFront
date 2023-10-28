export interface IRepositorioType {
    nome: string, 
    descrição: string, 
    estrelas: number, 
    linguagem: string,
}

export type RepositorioState = {
    repositorios: IRepositorioType[]
}

export type RepositorioAction = {
    type: string
    repositorio: IRepositorioType
}

export type DispatchType = (args: RepositorioAction) => RepositorioAction