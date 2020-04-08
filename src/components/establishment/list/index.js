import React from 'react';
import { Box, BoxFigure, Figure, Name } from './styled';
import { Row } from 'react-bootstrap';
import Detail from './detail';


export default ({ establishments }) => {

    return (
        <Row style={{ marginTop: "40px" }}>
            {
                establishments &&
                establishments.map(establishment =>

                    <div className="col-md-2" key={establishment._id}
                        data-fancybox data-src="#detailbox">
                        {establishment.img &&
                            <Box>
                                <BoxFigure >
                                    <Figure src={establishment.img} />
                                </BoxFigure>
                                <Name className="text-truncate">{establishment.name}</Name>
                            </Box>
                        }

                        <Detail data={establishment} />
                    </div>
                )
            }
        </Row>
    );
}


