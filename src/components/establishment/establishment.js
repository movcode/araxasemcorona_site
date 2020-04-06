import React  from 'react';
import { Background, Box, Title } from '../share_components/global_style';

const Establishment = props => {


    return (
        <Background bg="white" bottom="120">
            <Box bottom="80px">
                <div className="container">
                    <Title size="60px" sizeM="40px" bottom="60px" > Estabelecimentos</Title>
                </div>
            </Box>
        </Background>
    );

}

export default Establishment;