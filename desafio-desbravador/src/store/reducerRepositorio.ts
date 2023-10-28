import { RepositorioAction, RepositorioState } from "../types/repositorioType";
import * as actionTypes from "./actionTypes"

const initialState: RepositorioState = {    
    repositorios: []
}

const reducer = (
    state: RepositorioState = initialState,
    action: RepositorioAction
): RepositorioState => {
    switch (action.type) {
        case actionTypes.GETREPOSITORIOS:
            return {
                ...state,
                repositorios:  state.repositorios
            };
    }
    return state
}

export default reducer