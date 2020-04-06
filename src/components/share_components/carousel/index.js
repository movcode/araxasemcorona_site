import styled from 'styled-components';
import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const Icon = styled.img`
border:1px solid #c4c4c4;
padding:10px;
width:39px;
height:39px;
cursor:pointer;
background:#FFF;
border-radius:50%;
@media(max-width:1024px){
    display:none;
    
}
@media(min-width:1024px){
    display:block;
}
`;

export default ({ children, sectors }) => {

    return (
        <>
            <Carousel
                infinite
                addArrowClickHandler
                arrowLeft={<Icon src="/img/back.svg" />}
                arrowRight={<Icon src="/img/next.svg" />}
                slidesPerPage={4}
                breakpoints={{
                    640: {
                        slidesPerPage: sectors ? 2 : 1,
                        rtl: true,
                        dots: true,
                        centered:true
                    }
                }}

            >

                {children}
            </Carousel>

        </>
    )
}