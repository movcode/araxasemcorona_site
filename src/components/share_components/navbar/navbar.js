import React from 'react'
import NavMob from './navbar_mob';
import { BGNav, Nav, GroupLink, NavLink } from './navbar_style';



const Navbar = ({ logo }) => {

    const LINK = window.location.pathname;

    const active = page => page === LINK ? 1 : 0;

    return (<>
        <NavMob logo={logo} />

        <BGNav className="col-12">
            <div className="container" >
                <Nav className="row">
                    <div className="col-md-3">
                        {logo && <img src={logo} className="img-fluid" alt="logo" />}
                    </div>
                    <GroupLink className="col-9 float-right" >
                        <div className="float-right">
                            <NavLink to="/" active={active("/")} >HOME</NavLink>
                            <NavLink to="/sobre" active={active("/sobre")}>SOBRE</NavLink>
                            <NavLink to="/estabelecimentos" active={active("/estabelecimentos")}>ESTABELECIMENTOS</NavLink>
                            <NavLink to="/contato" active={active("/contato")}>CONTATO</NavLink>
                            <NavLink to="/registro" active={active("/registro")}>CADASTRAR</NavLink>
                        </div>
                    </GroupLink>
                </Nav>

            </div>
        </BGNav>
    </>);
}

export default Navbar;