
export interface IRepositorioType {
    name: string, 
    description: string, 
    stargazers_count: number, 
    language: string,
    full_name: string,
    html_url: string
}

export type RepositorioState = {
    name: string, 
    description: string, 
    stargazers_count: number, 
    language: string,
    full_name: string,
    html_url: string
}