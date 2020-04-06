import styled from 'styled-components';

export const MenuBox = styled.div`
width:100%;
position:absolute;
top:0;
right:0;
left:0;
bottom:0;
background: #000;
height:100vh; 
z-index:1001;
display:${props => props.show === 1 ? "block" : "none"};
padding:20px;
color:#fff;
`;