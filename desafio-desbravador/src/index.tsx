import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { DispatchType, UsuarioAction, UsuarioState } from './types/usuarioType';
import reducer from './store/reducer';
import { Provider } from "react-redux"
import { createStore, applyMiddleware, Store, combineReducers } from "redux";
import usuarioReducer from './store/reducer';
import repositorioReducer from './store/reducerRepositorio';
import thunk from "redux-thunk";

const store: Store<UsuarioState, UsuarioAction> & {
  dispatch: DispatchType
} = createStore(usuarioReducer, applyMiddleware(thunk));



/*const rootReducer = combineReducers({
  usuario: usuarioReducer,         // Reducer para o estado do usuário
  repositorio: repositorioReducer, // Reducer para o estado do repositório
});

const store = createStore(rootReducer, applyMiddleware(thunk));
*/

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
