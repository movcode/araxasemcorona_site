import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import Menu from '../share_components/navbar';
import * as Component from './components';
import { Api } from '../../share/api';
import Load from '../../components/share_components/load';

var Scroll = require('react-scroll');

const scroller = Scroll.scroller;

const Wrap = ({ page }) => {
    const [data, _data] = useState(false);
    const [contents, _contents] = useState(false);

    useEffect(() => {
        let isSubscribe = true;

        const fetch = async () => {
            const resp = await Api.get(Api.url.client, false);
            isSubscribe && resp.data && _data(resp.data);
            _contents(resp.data.config[0]);
        }

        fetch();
        return () => isSubscribe = false;
    }, []);

    useEffect(() => {
        page && scroller.scrollTo(page, {
            duration: 1000,
            delay: 100,
            smooth: true,
        });
    }, [page]);

    return (
        <>
            {!data && <Load />}
            <Menu logo={contents && contents.logo} />
            <Element name="home"><Component.Home /></Element>
            <Element name="about"><Component.About /></Element>
            <Element name="establishment"><Component.Establishemtn /></Element>
            <Element name="registry"><Component.Registry /></Element>
            <Element name="contact"><Component.Contact /></Element>
        </>
    );

}

export default Wrap