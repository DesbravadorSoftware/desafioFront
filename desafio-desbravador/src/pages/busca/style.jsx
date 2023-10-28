import styled from "styled-components";

export const Container = styled.div`
    margin: 0px;
    padding: 0px;
    height: 100%;
    width: 100%;
    background-color: #04B3C8;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    p,
    h1{
        color: #fff;
        margin: 5px;
    }

    input{
        height: 24px;
        width: 400px;
        border: none;
        border-radius: 10px;
        padding-left: 5px;
        margin-top: 10px;
    }
    @media(max-width: 480px){
        input{
            width: 80%;
        }
    }
`

export const Pesquisa = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    position: fixed;
    top: 10%;
`
    
export const Mensagem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: red;
`
