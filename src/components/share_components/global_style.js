import styled from 'styled-components';
import { PrimaryColor, FontColorSecondary } from '../../share/theme';

export const Background = styled.div`        
background: ${props => !props.bg ? PrimaryColor : props.bg};           
overflow:hidden;
margin-bottom:${props => props.bottom + "px"};
`;

export const BackgroundDeg = styled.div`
background: ${p => !p.color ? PrimaryColor : p.color};           
overflow:hidden;
transform:skewY(-2deg);
`;


export const BoxDeg = styled.div`
margin-top:130px;
margin-bottom:80px;
padding:0;
transform:skewY(2deg);
`;

export const Box = styled.div`
margin-top:140px;

margin-bottom:${p => p.bottom};
`;


export const Title = styled.h1`
font-family: ${p => !p.font ? "AvenirBold" : p.font};
color:${props => !props.color ? "#000" : props.color};
padding:${props => props.p};
margin:${props => props.m};
margin-top:${props => props.top};
margin-bottom:${props => props.bottom};
margin-left:${props => props.left};
margin-right:${props => props.right};
text-align:${props => !props.align ? "left" : props.align};

@media(max-width:1024px){
    font-size:${props => !props.sizeM ? "60px" : props.sizeM};

}
@media(min-width:1024px){
    font-size:${props => !props.size ? "70px" : props.size};
};

`;

export const Loader = styled.img`
white:25px;
height:25px;
display:${p => p.active === 1 ? "block" : "none"};
`;


export const Text = styled.p`
color:${props => !props.color ? FontColorSecondary : props.color};
text-align:${props => !props.align ? "justify" : props.align};
padding:${props => props.padding};
font-family:AvenirRegular;
margin-bottom:${props => props.bottom};
`;

export const Bold = styled.b`
font-weight:bold;
font-family: AvenirBold;
`;


export const FormStyle = styled.form`
border-radius:6px;
background:#fff;
padding:40px;
-webkit-box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.45);
-moz-box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.45);
box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.45);
margin-bottom:20px;
`;

export const CircularImage = styled.div`
    width: ${props => !props.fluid && "90px"};
    height: ${props => !props.fluid && "90px"};
    margin:10px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    background:url(${props => props.bg});
    background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  opacity:${p => p.op === 1 ? "0.3" : 1};
cursor: pointer;
  &:hover{
      opacity:0.5;
  }
`;

export const Href = styled.a`
color:${props => props.color ? props.color : "#fff"};
text-decoration:none;
&:hover{
color:${props => props.color ? props.color : "#fff"};
    text-decoration:none;
};
`;