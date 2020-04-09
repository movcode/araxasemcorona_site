import React from 'react';
import { Navbar, } from 'react-bootstrap';
import Links from './links';
export default props => {

    return (<>        
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