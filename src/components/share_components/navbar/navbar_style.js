import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PrimaryColor,LinkActive, LinkPrimary, LinkHoverPrimary } from '../../../share/theme';


export const Image = styled.img`width:${props => props.w + "px"};`;

export const Nav = styled.nav`
    padding-bottom:20px;                    
`;

export const GroupLink = styled.div`
margin-top:20px;
`;

export const NavLink = styled(Link)`
text-decoration: none;
font-weight:bold;
font-size:14px;
/* font-family: AvenirRegular; */
margin-left:30px;
color: ${props => props.active === 1 ? LinkActive : LinkPrimary};    
 &:hover{    
    text-decoration: none;
    color:${LinkHoverPrimary};
    opacity:0.7;
}`;


export const SignLink = styled.div`
/* width:40px; */
margin-left:30px;
float:right;
margin:0;
padding-left:20px;
padding-right:20px;
padding-top:5px;
padding-bottom:5px;
color:#fff;
background:#F5B64A;
border-radius:4px;
`;

export const BGNav = styled.div`
position: fixed;
z-index:1000;
@media(max-width:1024px){
    display:none;
}

background: ${PrimaryColor};
`;