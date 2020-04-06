import React from 'react';
import { Box } from './style';
import Center from '../center';

import { Title } from '../global_style';


const TitlePage = ({ title, color }) => {

    return (
        <Box>
            <Center>
                <Title color={color} >{title}</Title>
            </Center>
        </Box>
    );
}


export default TitlePage;