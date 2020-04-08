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

export const Container = styled.div`
margin-top:180px;
@media(max-width:1024px){
    margin-left:10px;
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
padding-left:10px;
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


export const Close = styled.div`
width:40px;
height:auto;
position:relative;
right:0;
float:right;
margin:20px;
cursor:pointer;

`;