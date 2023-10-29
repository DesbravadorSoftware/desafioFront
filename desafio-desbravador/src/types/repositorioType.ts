export interface IRepositorioType {
    name: string, 
    description: string, 
    stargazers_count: number, 
    language: string,
    full_name: string,
    html_url: string
}

export type RepositorioState = {
    repositorio: IRepositorioType;
}
export type RepositorioAction = {
    type: string
    repositorio: IRepositorioType
}

export type DispatchType = (args: RepositorioAction) => RepositorioAction