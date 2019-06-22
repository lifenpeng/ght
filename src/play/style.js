import styled from 'styled-components';

export const Main = styled.div`
    width:100%;
    height:100%;
    overflow:hidden;
    background:#fff;
`;

export const Login = styled.div`
    width:90%;
    height:60%;
    position:fixed;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    background:#fff;
    text-align:center;
    padding-top:15px;
    box-sizing:border-box;
    z-index:3;
    input {
        width:80%;
        margin-top:25px;
    }
    button {
        width:30%;
        margin-top:30px;
    }
`

export const Mask = styled.div`
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.5);
    position:fixed;
    top:0px;
    left:0px;
    z-index:5
`
