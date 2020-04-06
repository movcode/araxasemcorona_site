import styled from 'styled-components';

export const BoxLoad = styled.div`
position:absolute;
background:${p => !p.bg || p.bg === null ? "black" : p.bg};
width:100%;
height:100%;
z-index:10000;
overflow:hidden;
opacity: ${p => !p.op ? 0.8 : p.op};
top:0%;
bottom:0%;
left:0%;
right:0%;
`;

export const ImgLoad = styled.img`
white:40px;
height:40px;
opacity:1;

`;