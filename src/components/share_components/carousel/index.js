import styled from 'styled-components';
import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const Icon = styled.img`
border:1px solid #c4c4c4;
padding:5px;
width:30px;
color:#c4c4c4;
height:30px;
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

export default ({ children, sectors, pages }) => {

    return (
        <>
            <Carousel
                infinite

                addArrowClickHandler
                arrowLeft={!sectors ? <Icon src="/img/back.svg" /> : ""}
                arrowRight={!sectors ? <Icon src="/img/next.svg" /> : ""}
                slidesPerPage={pages}
                dots={sectors ? true : false}
                breakpoints={{
                    640: {
                        slidesPerPage: 2,
                        dots: true,
                        centered: true,
                        autoPlay: 2000,
                        animationSpeed: 1000,
                    }
                }}

            >

                {children}
            </Carousel>

        </>
    )
}