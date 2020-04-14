import styled from 'styled-components';
import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const Icon = styled.div`
 padding:5px;
 border-radius:50%;
border:1px solid #c4c4c4;
color:#c4c4c4;
font-size:18px;
cursor:pointer;



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
                arrowLeft={<Icon className="ti-angle-left" />}
                arrowRight={<Icon className="ti-angle-right" />}
                slidesPerPage={pages}
                dots={sectors ? true : false}
                breakpoints={{
                    640: {
                        slidesPerPage: 2,
                        dots: true,
                        centered: true,
                        // autoPlay: 2000,
                        // animationSpeed: 1000,
                    }
                }}
            >

                {children}
            </Carousel>

        </>
    )
}