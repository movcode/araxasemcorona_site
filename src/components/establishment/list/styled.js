import styled from 'styled-components';


export const Box = styled.div`
width:150px;
@media(max-width:1024px){
    width:90px;
}
@media(min-width:1024px){
    width:150px;
}
cursor: pointer;
float:left;
overflow:hidden;
margin-right:20px;
`;

export const BoxFigure = styled.div`         
    padding:0;    
    overflow:hidden;
    margin:0;
    background:#fff;
    border-radius:4px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
    border: 1px solid #f2f2f2;    
    &:hover{
        border:1px solid #f2f2f2;
    }    
`;

export const Figure = styled.img`   
width:100%;           
    padding:0;    
    margin:0;
    border-radius: 4px;
`;


export const Name = styled.p`
color:#000;
width:100%;
margin-top:5px;
text-align:center;
white-space: nowrap;
padding:5px;
font-weight:bold;
@media(max-width:1024px){
    font-size:12px;
}

`;