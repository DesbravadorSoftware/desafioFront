import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`
export const RepositorioDetalhado = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    aling-items: start;
    color: #346E75;
    img{
        margin: 10px;
        height: 30px;
        width: 30px;
    }
    img:hover{
        cursor: pointer;
    }
    label{
        margin-top: 10px;
    }
`