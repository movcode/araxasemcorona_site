import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MenuBox ,Links} from './style';
import { NavLink,SignLink } from '../../navbar_style';
import { action } from '../../../../../store/menuRedux';


const Menu = ({ logo }) => {
    const dispatch = useDispatch();
    const { show } = useSelector(state => state.menu);

    const handleMenu = () => dispatch(action.show(0));

    return (<MenuBox show={show} >
        
        <div className="col-5">
           <a href="/" >
           {logo && <img src={logo} alt="logo" />}
           </a>
        </div>
        
        <Links className="d-flex flex-column align-items-center" style={{ height: "100vh" }}>
            <NavLink onClick={handleMenu} to="/">HOME</NavLink>

            <br />
            <NavLink onClick={handleMenu} to="/sobre">SOBRE</NavLink>

            <br />
            <NavLink onClick={handleMenu} to="/estabelecimentos">ESTABELECIMENTOS</NavLink>

            <br />
            <NavLink onClick={handleMenu} to="/contato">CONTATO</NavLink>

            <br />
            <NavLink onClick={handleMenu} to="/registro">REGISTRAR</NavLink>
            <br />
            <NavLink onClick={handleMenu} to="/login"><SignLink>LOGIN</SignLink></NavLink>

        </Links>

    </MenuBox>);
}
export default Menu;