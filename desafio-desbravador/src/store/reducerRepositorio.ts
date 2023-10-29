import { IRepositorioType, RepositorioAction, RepositorioState } from "../types/repositorioType";
import * as actionTypes from "./actionTypes";

const initialState: RepositorioState = {    
    repositorio:  {
        name: "", 
        description: "", 
        stargazers_count: 0, 
        language: "",
        full_name: "",
        html_url: ""
    }
}

const repositorioReducer = (
    state: RepositorioState = initialState,
    action: RepositorioAction
): RepositorioState => {
    switch (action.type) {
        case actionTypes.GETREPOSITORIO:
            return {
                ...state,
                repositorio: {
                    name: action.repositorio.name, 
                    description: action.repositorio.description, 
                    stargazers_count: action.repositorio.stargazers_count, 
                    language: action.repositorio.language,
                    full_name: action.repositorio.full_name,
                    html_url: action.repositorio.html_url
                },
            };

        default:
            return state;
    }
}

export default repositorioReducer;

