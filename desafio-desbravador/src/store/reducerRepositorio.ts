/*import { IRepositorioType, RepositorioAction, RepositorioState } from "../types/repositorioType";
import * as actionTypes from "./actionTypes";

const initialState: RepositorioState = {    
    repositorios: [] // Initialize with an empty array
}

const reducer = (
    state: RepositorioState = initialState,
    action: RepositorioAction
): RepositorioState => {
    switch (action.type) {
        case actionTypes.GETREPOSITORIOS:
            const novosRepos: IRepositorioType[] = action.repositorios.map(repo => ({
                nome: repo.name, 
                descrição: repo.descrição, 
                estrelas: repo.stars, 
                linguagem: repo.linguagem,
            }));

            return {
                ...state,
                repositorios: [...state.repositorios, ...novosRepos],
            };

        default:
            return state;
    }
}

export default reducer;

*/
