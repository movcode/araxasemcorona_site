import React, { useState } from 'react';
import { Background, Box, Title } from '../share_components/global_style';
import Center from '../share_components/center';
import { CircularImage } from '../share_components/global_style';
import Row from '../../components/share_components/row';
import Carousel from '../share_components/carousel';

const Establishment = ({ sectors }) => {
    const [categories, _categories] = useState(false);

    console.log(categories);
    return (
        <Background bg="white" bottom="120">
            <Box bottom="80px">
                <Center>
                    <Title size="60px" sizeM="40px" bottom="60px" > Estabelecimentos</Title>
                </Center>

                {/* sectors */}
                <Center>
                    <div className="col-md-6">
                        <Carousel sectors>
                            {
                                sectors && sectors.map(data =>
                                    <div key={data._id}>

                                        <div className="col-md-12 ">
                                            <Row>
                                                <CircularImage
                                                    onClick={()=>_categories(data.categories)}
                                                    bg={data.icon}></CircularImage>
                                            </Row>
                                            <Center>{data.title}</Center>
                                        </div>

                                    </div>
                                )
                            }
                        </Carousel>
                    </div>
                </Center>

            </Box>
        </Background>
    );

}

export default Establishment;