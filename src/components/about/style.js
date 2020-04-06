import styled from 'styled-components';


export const BoxHow = styled.div`
margin-top:20px;
margin-bottom:20px;

`;


export const BoxItem = styled.div`
background:#37237F;
border-radius:6px;
overflow:hidden;
-webkit-box-shadow: -1px 2px 5px 0px rgba(138,134,138,1);
-moz-box-shadow: -1px 2px 5px 0px rgba(138,134,138,1);
box-shadow: -1px 2px 5px 0px rgba(138,134,138,1);

@media(max-width:1024px){
    height:580px;
}
@media(min-width:1024px){
    height:480px;
}`;


export const Img = styled.img`
width:100%;
/* clip-path: circle(100% at top);
overflow:hidden; */
padding:20px;

`;



export const Div = styled.div`
@media(min-width:1024px){
    padding-bottom:${props => props.p};
}
`;