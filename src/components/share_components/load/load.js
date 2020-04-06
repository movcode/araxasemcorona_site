import React from 'react';
import { BoxLoad, ImgLoad } from './style';
import Center from '../center';

const Load = ({ color, opacity }) => {
    return (
        <BoxLoad bg={color} op={opacity}>

            <Center>
                <div style={{ height: "100vh" }} className="d-flex flex-column justify-content-center">
                    {
                        !color
                            ? <ImgLoad src="/img/load_white.gif" />
                            : <ImgLoad src="/img/loader.gif" />
                    }
                </div>
            </Center>
        </BoxLoad>
    );
}

export default Load;