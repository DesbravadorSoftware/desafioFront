import styled from "styled-components";

export const Container = styled.div`
    height: 90%;
    width: 70%;
    color: #346E75;
    text-align: center;
    h1{
        margin: 10px;
    }
    img{
        margin: 10px;
        height: 30px;
        width: 30px;
    }
    img:hover{
        cursor: pointer;
    }
    

    @media(max-width: 850px){
        width: 100%;
    }
`
export const TopRepositorios = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
`

export const TodosRepositorios = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    overflow: auto;
`

export const Button = styled.button`
    margin: 5px auto;
    height: 45px;
    width: 190px;
    background-color: #346E75;
    border: none;
    border-radius: 10px;
    color: white;

    &:hover{
        cursor: pointer;
    }
`