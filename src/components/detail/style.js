import styled from 'styled-components';
import { PrimaryColor } from '../../share/theme';

export const BoxDetail = styled.div`
width:100%;
overflow:hidden;

`;

export const Menu = styled.div`
background:${PrimaryColor};
width:100%;
height:auto;
overflow:hidden;
padding-top:10px;
padding-bottom:10px;
position:absolute;
position:fixed;
z-index:3000;
top:0;
`;



export const Close = styled.div`
width:40px;
float:right;
position:absolute;
right:5px;
top:20px;
cursor:pointer;
`;

export const Icon = styled.div`
font-weight:bold;
float:left;
margin-right:5px;
font-size:20px;

`;

export const Container = styled.div`
width:100%;
margin-top:79px;
overflow:hidden;
`;

export const Href = styled.a`
color:#fff;
text-decoration:none;
&:hover{
    color:#ccc;
    text-decoration:none;
}
`;

export const Header = styled.div`
width:100%;
position:fixed;
padding-top:20px;
background:${PrimaryColor};
border-bottom:1px solid #666;
padding-bottom:40px;
`;


export const BoxFigure = styled.div`    
    margin:0;
    @media (min-width:1024px) {
     padding-right:20px;
    border-right:1px solid #666;    
    }
    @media (max-width:1024px) {
    padding:0;
    }
`;

export const Figure = styled.img`    
    border-radius: 4px;
`;

export const Title = styled.h3`
    color: #f1f1f1;  
    margin-bottom:20px;
  
`;

export const Itens = styled.div`
width:100%;
margin-bottom:8px;
`;

export const Description = styled.div`
width:100%;
margin-top:320px;
padding-top:40px;
text-align:justify;
color:#fff;
`;


export const ButtonShare = styled.div`
cursor:pointer;`;

export const BoxShare = styled.div`
width:100%;
height:100vh;
position:absolute;
z-index:30002;
position:fixed;
background-color: black;
`;

export const BoxButtonsShare = styled.div`
width:100%;
height:100%;

`;
