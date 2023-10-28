import React, { useState} from "react";
import * as B from "./style";
import { UsuarioType } from "../../types/usuarioType";
import { useNavigate } from "react-router-dom";

export const Busca = () => {
    const navigate = useNavigate();
    const [busca, setBusca] = useState("");
    const [usuarioEncontrado, setUsuarioEncontrado] = useState(true);
    const [pesquisando, setPesquisando] = useState(false);
    const [usuario, setUsuario] = useState<UsuarioType>();

    const fetchDadosGit = async() =>{
        const response = await fetch(`https://api.github.com/users/${busca}`)
        const data = await response.json();
        if(response.status === 200){
            setUsuarioEncontrado(true);
            setPesquisando(false);
            setUsuario(data);
            navigate("/perfil");
        }
        if(response.status === 404){
            setUsuarioEncontrado(false);
        }
    }

    const buscar = (e: React.KeyboardEvent<HTMLElement>) => {
        if(e.keyCode === 13){
            e.preventDefault();
            setUsuarioEncontrado(true);
            fetchDadosGit();
        }
    }

    return(
        <B.Container>
            <B.Pesquisa>
                <h1>
                    Bem vindo! 
                </h1>
                <p>
                    Para encontrar as informações de um perfil do GitHub, basta inserir o nome do usuario no campo a baixo!
                </p>
                <input placeholder="Digite o nome de usuário do GitHub..." value={busca} onChange={(e)=> setBusca(e.target.value)} onKeyDown={buscar}/>
            </B.Pesquisa>
            {usuarioEncontrado === false && pesquisando === false && (
                <B.Mensagem>
                    <h2>
                        Usuário não encontrado, por favor, verificar se está digitado corretamente.
                    </h2>
                </B.Mensagem>
            )}

        </B.Container>
    )
}