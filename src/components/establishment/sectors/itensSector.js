import React, { useState } from 'react';
import { CircularImage } from '../../share_components/global_style';
import Center from '../../share_components/center';
import Carousel from '../../share_components/carousel';
import styled from 'styled-components';

const Title = styled.p`
width:100%;
overflow: hidden;
color:black;
text-align:center;
`;

const Box = styled.div`

background:#fff;
`;


export default ({ sectors, _categories, _establishments }) => {
    const [selected, _selected] = useState([]);

    const setDatas = data => {
        _selected(data._id);

        const allEstablishments = [];

        data.categories.map(c => c.establishments
            .map(e => allEstablishments.push(e))
        );

        console.log(data)
        _categories(data.categories);
        _establishments(allEstablishments);
    }


    return (
        <Carousel sectors pages="4" pagesMob={3}>
            {
                sectors &&
                sectors.map(data =>
                    <Box key={data._id}>
                        <CircularImage

                            onClick={() => setDatas(data)}
                            op={selected === data._id ? 1 : 0}
                            bg={data.icon}></CircularImage>

                        <Center>
                            <Title className="text-truncate">{data.title}</Title>
                        </Center>
                    </Box>
                )
            }
        </Carousel>
    );
}
