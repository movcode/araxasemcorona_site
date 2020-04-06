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
/* font-weight:bold; */

font-family: AvenirBold;
margin-left:30px;
color: ${props => props.active === 1 ? LinkActive : LinkPrimary};    
 &:hover{    
    text-decoration: none;
    color:${LinkHoverPrimary};
    opacity:0.7;
}`;

export const BGNav = styled.div`
position: fixed;
z-index:1000;
@media(max-width:1024px){
    display:none;
}

background: ${PrimaryColor};
`;