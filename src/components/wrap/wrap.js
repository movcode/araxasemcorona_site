import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import Menu from '../share_components/navbar';
import * as Component from './components';


var Scroll = require('react-scroll');

const scroller = Scroll.scroller;

const Wrap = ({ page }) => {

    useEffect(() => {
        page && scroller.scrollTo(page, {
            duration: 1000,
            delay: 100,
            smooth: true,
        });
    }, [page]);

    return (
        <>
            <Menu />
            <Element name="home"><Component.Home /></Element>
            <Element name="about"><Component.About /></Element>
            <Element name="establishment"><Component.Establishemtn /></Element>        
            <Element name="registry"><Component.Registry /></Element>
            <Element name="contact"><Component.Contact /></Element>
        </>
    );

}

export default Wrap