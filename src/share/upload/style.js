import styled from 'styled-components';

export const BoxDropzone = styled.div`
border-radius:6px;

border:3px dotted ${p => p.error === 1 ? "red" : "#ccc"};
padding:10px;
margin-bottom:10px;

width:100%;
margin-top:${p => p.top + "px"};
`;

export const ImgUploaded = styled.img`
width:80%;
height:80px;
border-radius:6px;
overflow:hidden;
`;

export const Label = styled.div`
text-align:center;
color:#000;
`;



