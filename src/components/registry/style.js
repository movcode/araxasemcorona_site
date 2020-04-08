import styled from 'styled-components';


export const Button = styled.div`
background:${p => p.active === 1 ? "#EDEDED" : "white"};
padding:20px;
color:#000;
padding:20px;
text-align:center;
cursor:pointer;
margin:0;
border:0;

`;


export const BoxButton = styled.div`
margin:0;
padding: 0;
`;


export const BorderBox = styled.div`
border-radius: 6px 6px 0px 0px;
-moz-border-radius: 6px 6px 0px 0px;
-webkit-border-radius: 6px 6px 0px 0px;
width:100%;
margin:0;
padding: 0;
border:0pc;
overflow:hidden;
`;