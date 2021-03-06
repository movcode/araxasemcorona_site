import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { action } from '../../../../store/menuRedux';
import Menu from './menu';
import { NavMob, LaunchMenu } from './style_nav_mob';
import './animation.css';


const NavbarMob = ({ logo }) => {
    const { show } = useSelector(state => state.menu);
    const dispatch = useDispatch();

    const handleMenu = (status) => dispatch(action.show(status));

    return (
        <>
            <NavMob className="col-12" >
                <div className="container">
                    <LaunchMenu >
                        {show === 0 ?
                            <FontAwesomeIcon icon={faBars} color="white" size="2x" onClick={() => handleMenu(1)} />
                            : <FontAwesomeIcon className="openMenu" icon={faTimes} color="white" size="2x" onClick={() => handleMenu(0)} />}
                    </LaunchMenu>
                    <div className="col-8">
                        {logo && <img src={logo} className="img-fluid" style={{marginTop:"-20px"}} alt="logo" />}
                    </div>
                </div>
                <Menu logo={logo}/>

            </NavMob>
        </>

    );
}
export default NavbarMob;