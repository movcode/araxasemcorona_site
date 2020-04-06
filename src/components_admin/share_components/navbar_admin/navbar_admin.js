import React from 'react';
import { Navbar, } from 'react-bootstrap';
import Links from './links';
import Alerts from '../../../components/share_components/alerts';
export default props => {

    return (<>
        <Alerts />
        <Navbar bg="light" expand="lg">
            {/* <Navbar.Brand href="#home">Rafael Augusto</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Links/>
            </Navbar.Collapse>
        </Navbar>
    </>
    )
}