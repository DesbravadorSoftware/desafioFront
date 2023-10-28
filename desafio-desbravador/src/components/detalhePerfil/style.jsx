import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #346E75;
    width: 30%;
    height: 90%;
    border: none;
    border-radius: 0 0 45% 45%;
    margin: 0 20px;
    color: white;
    .dados-perfil{
        width: 80%;
        margin: 10px auto;
        h2,
        p{
            margin: 5px 0;
        }
    }

    @media(max-width: 480px){
        width: 100%;
        height: 80%;
        margin: 0;    
        .dados-perfil{
            p{
                font-size: 12px;;
            }
        }
    }
`

export const Avatar = styled.div`
    width: 150px;
    height: 150px;
    margin: 10px auto;
    background-color: white;
    border: none;
    border-radius: 100%;
    
    @media(max-width: 480px){
        width: 150px;
        height: 150px;    
    }
`
export const Button = styled.button`
    margin: auto auto 10% auto;
    height: 45px;
    width: 190px;
    background-color: #3DABC2;
    border: none;
    border-radius: 10px;
    color: white;

    &:hover{
        cursor: pointer;
    }
`