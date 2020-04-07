import React, { useState, useEffect } from 'react';
import { Background, Box, Title } from '../share_components/global_style';
import Center from '../share_components/center';
import SectorItens from './sectors';
import CategoriesItens from './categories';
import ListEstablishment from './list'


const Establishment = ({ sectors }) => {
    const [categories, _categories] = useState(false);
    const [establishments, _establishments] = useState(false);

    useEffect(() => {
        sectors && _categories(sectors[0].categories);
        console.log(sectors);
    }, [sectors]);

    return (
        <Background bg="white" bottom="120">
            <Box bottom="80px">

                <Center>
                    <Title size="60px" sizeM="40px" bottom="60px" > Estabelecimentos</Title>
                </Center>

                <Center>
                    <div className="col-md-6">
                        <SectorItens sectors={sectors}
                            _establishments={_establishments}
                            _categories={_categories} />
                    </div>
                </Center>

                <Center top="80px">
                    <div className="col-md-8">
                        <CategoriesItens categories={categories} _establishments={_establishments} />
                    </div>
                </Center>


                <Center>
                    <div className="col-md-8">
                        <ListEstablishment establishments={establishments} />

                    </div>
                </Center>
            </Box>
        </Background>
    );

}

export default Establishment;