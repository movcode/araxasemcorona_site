import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MenuBox } from './style';
import { NavLink } from '../../navbar_style';
import { action } from '../../../../../store/menuRedux';


const Menu = (props) => {
    const dispatch = useDispatch();
    const { show } = useSelector(state => state.menu);

    const handleMenu = () => dispatch(action.show(0));

    return (<MenuBox show={show} >
        Logo

        <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh" }}>
            <NavLink onClick={handleMenu} to="/">HOME</NavLink>

            <br />
            <NavLink onClick={handleMenu} to="/sobre">SOBRE</NavLink>

            <br />
            <NavLink onClick={handleMenu} to="/">ESTABELECIMENTOS</NavLink>

            <br />
            <NavLink onClick={handleMenu} to="/contato">CONTATO</NavLink>

            <br />
            <NavLink onClick={handleMenu} to="/">REGISTRAR</NavLink>

        </div>

    </MenuBox>);
}
export default Menu;