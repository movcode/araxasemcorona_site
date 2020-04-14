import styled from 'styled-components';


export const DetailBox = styled.div`
width:100%;
height:100vh;
position:absolute;
z-index:30000;
position:fixed;
display:${p => p.active === 1 ? 'block' : "none"};
background-color: rgba(0,0,0,.9);
`;

export const Icon = styled.div`
font-weight:bold;
float:left;
margin-right:5px;
font-size:20px;

`;

export const Container = styled.div`
@media(max-width:1024px){
    margin-left:10px;
    margin-top:60px;
}
@media(min-width:1024px){
    margin-top:180px;
}

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
border-bottom:1px solid #666;
margin-bottom:20px;
padding-bottom:20px;
`;
export const HeaderContent = styled.div`

`;

export const BoxFigure = styled.div`    
    margin:0;
    padding-left:0;
    padding-top:0;
    padding-bottom:0;    
    border-right:1px solid #666;
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

export const Close = styled.div`
width:40px;
height:auto;
position:absolute;
right:0;
float:right;
margin:20px;
cursor:pointer;
z-index:30001;
`;

export const ButtonShare = styled.div`
cursor:pointer;`;

export const BoxShare = styled.div`
width:100%;
height:100vh;
position:absolute;
z-index:30002;
position:fixed;
display:${p => p.active === 1 ? 'block' : "none"};
background-color: black;
`;

export const BoxButtonsShare = styled.div`
width:100%;
height:100%;

`;