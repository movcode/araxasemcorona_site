import React from 'react';
import { BgHome, LeafBg, BoxTitle, ImgSvg, TitleHome, SubTitleHome } from './styles';
import { Box, Text } from '../share_components/global_style';
import Row from '../share_components/row';

const Home = ({ title, subtitle, text }) => {

    return (
        <BgHome >
            <LeafBg src="img/leaf.png" />
            <Box>
                <Row>
                    <BoxTitle className="col-md-6">
                        <TitleHome >{title}</TitleHome>
                        <SubTitleHome>{subtitle}</SubTitleHome>

                        <Text>{text}</Text>
                    </BoxTitle>

                    <div className="col-md-6">
                        <ImgSvg className="img-fluid" src="img/covid.svg" alt="Escudo contra coronavirus" />
                    </div>
                </Row>
            </Box>
        </BgHome>
    );
}


export default Home;