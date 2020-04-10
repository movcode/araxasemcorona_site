import styled from 'styled-components';
import { FontColorPrimary ,PrimaryColor} from '../../share/theme';

export const BgHome = styled.div`        
background: ${PrimaryColor};           
height:100vh;
overflow:hidden;
`;



export const BoxTitle = styled.div`

@media(max-width:1024px){
    text-align:center;    
}
@media(min-width:1024px){
margin-top:130px;
padding-left:130px;
};
`;

export const TitleHome = styled.h1`
font-family: AvenirBold;
color:${FontColorPrimary};

@media(max-width:1024px){
font-size:40px;
}
@media(min-width:1024px){
    font-size:60px;
};

`;

export const SubTitleHome = styled.h5`
color:${FontColorPrimary};
font-family:AvenirRegular;

margin-top:-10px;
@media(max-width:1024px){
font-size:30px;
margin-bottom:80px;
};
@media(min-width:1024px){
    font-size:40px;
    margin-bottom:80px;
};

`;

export const ImgSvg = styled.img`
@media(min-width:1024px){
width:520px;
margin-top:40px;
margin-left:40px;
};
@media(max-width:1024px){
    display:none;
/* width:370px;
margin-left:20px; */

};



`;

export const LeafBg = styled.img`
border:0;
max-width: 100%;
bottom:0;
height: auto;
position:absolute;
vertical-align:bottom;
`;


