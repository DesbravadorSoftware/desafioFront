import { IRepositorioType, RepositorioState } from "../types/repositorioType"
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const repositorioInitialState: RepositorioState = {
  name: "",
  description: "",
  stargazers_count: 0,
  language: "",
  full_name: "",
  html_url: ""

};

const repositorioSlice = createSlice({
  name: 'repositorio',
  initialState: repositorioInitialState,
  reducers: {
    getRepositorio: (state, action: PayloadAction<IRepositorioType>) => {
      return {
        ...state,
        ...{
          name: action.payload.name,
          description: action.payload.description,
          stargazers_count: action.payload.stargazers_count,
          language: action.payload.language,
          full_name: action.payload.full_name,
          html_url: action.payload.html_url
        },
      };
    },

  },
});

export const { getRepositorio } = repositorioSlice.actions;
export default repositorioSlice.reducer;