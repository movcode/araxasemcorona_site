import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import Menu from '../share_components/navbar';
import * as Component from './components';
import { Api } from '../../share/api';
import Load from '../../components/share_components/load';
import Detail from '../detail';

var Scroll = require('react-scroll');

const scroller = Scroll.scroller;

const Wrap = ({ page }) => {
    const [sectors, _sectors] = useState(false);
    const [contents, _contents] = useState(false);

    useEffect(() => {
        let isSubscribe = true;

        const fetch = async () => {
            const resp = await Api.get(Api.url.client, false);
            isSubscribe && resp.data &&
                _sectors(resp.data.sectors);
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
            {!sectors && <Load />}
            <Detail />
            
            <Menu logo={contents && contents.logo} />

            <Element name="home"><Component.Home
                title={contents && contents.title_home}
                subtitle={contents && contents.subtitle_home}
                text={contents && contents.text_home}
            /></Element>

            <Element name="about"><Component.About text={contents && contents.text_about} /></Element>

            <Element name="establishment"><Component.Establishemtn sectors={sectors && sectors} /></Element>

            <Element name="notices"><Component.Notices  /></Element>

            <Element name="registry"><Component.Registry sectors={sectors} /></Element>

            <Element name="contact"><Component.Contact /></Element>

        </>
    );

}

export default Wrap