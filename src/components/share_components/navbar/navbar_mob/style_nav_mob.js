import styled from 'styled-components';
import { PrimaryColor } from '../../../../share/theme';


export const NavMob = styled.div`
padding-top:20px;
padding-bottom:12px;
position: fixed;
z-index:1000;
background:${PrimaryColor};
@media(max-width:1024px){
    display:block;
}
@media(min-width:1024px){
    display:none;
}`;


export const LaunchMenu = styled.div`
position:absolute;
right:40px;
top:25px;
cursor:pointer;
z-index: 1003;
`;