import styled from 'styled-components';

export const Main = styled.div`
    width:100%;
    height:50px;
    background:#F5F5F5;
`

export const Tit = styled.div`
    width:40%;
    height:50px;
    float:left;
    line-height:50px;
    color:#000;
    font-size:18px;
    text-align:center;
    font-weight:bold;
`

export const Search = styled.div`
    width:60%;
    height:50px;
    float:left;
    line-height:50px;
    text-align:left;
    input {
        width:75%;
        height:30px;
        background:#fff;
        border-radius:20px;
        border:1px solid #fff;
        font-size:16px;
        padding-left:15px;
        outline:none;
        cursor:pointer;
    }
`