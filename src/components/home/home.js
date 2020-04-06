import React from 'react';
import { BgHome, LeafBg, BoxTitle, ImgSvg, TitleHome, SubTitleHome } from './styles';
import { Box, Text } from '../share_components/global_style';
import Row from '../share_components/row';

const Home = props => <>
    <BgHome >
        <LeafBg src="img/leaf.png" />
        <Box>
            <Row>
                <BoxTitle className="col-md-6">
                    <TitleHome >ARAXÁ CONTRA</TitleHome>
                    <SubTitleHome>O CORONAVÍRUS</SubTitleHome>

                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Text>
                </BoxTitle>

                <div className="col-md-6">
                    <ImgSvg className="img-fluid" src="img/covid.svg" alt="Escudo contra coronavirus" />
                </div>
            </Row>
        </Box>
    </BgHome>
</>;


export default Home;