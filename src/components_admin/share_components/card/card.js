import React from 'react';
import { Card, BoxFigure, Figure, BoxContent, Title, Subtile } from './styled'
import Row from '../../../components/share_components/row';
import './animation.css';

export default ({ img, title, subtitle }) => {
    return (
        <Card className="card-animation">

            <Row >
                {img &&
                    <BoxFigure className="col-3 col-md-3" >
                        <Figure src={img} className="img-fluid" />
                    </BoxFigure>
                }


                <BoxContent className="col-9 col-md-9">
                    <Row>
                        <Title>{title}</Title>
                    </Row>
                    <Row>
                        <Subtile>{subtitle}</Subtile>
                    </Row>
                </BoxContent>

            </Row>

        </Card>
    );
}