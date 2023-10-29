import * as D from "./style";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { UsuarioState } from "../../types/usuarioType";
import { useDispatch } from "react-redux";
import { getUsuario } from "../../store/usuarioReducer";

export const DetalhePerfil = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const usuario = useSelector((state:{usuario: UsuarioState}) => state.usuario);

    function buscar() {
        navigate("/");
        dispatch(getUsuario({
            nome: "",
            login: "",
            followers: 0,
            following: 0,
            imagem_avatar: "",
            email: "",
            bio: ""
        }));
    }

    const avatarStyle = {
        backgroundImage: `url("${usuario.imagem_avatar}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <D.Container>
            <D.Avatar style={avatarStyle} />
            <div className="dados-perfil">
                <h2>{usuario.nome}</h2>
                <p>{usuario.login}</p>
                <label>{usuario.email}</label>
                <p>{usuario.bio}</p>
            </div>
            <div className="dados-perfil">
                <p>Seguidores: {usuario.followers}</p>
                <p>Seguindo: {usuario.following}</p>
            </div>
            <D.Button onClick={buscar}>Buscar outro usuário</D.Button>
        </D.Container>
    )
}