import React from 'react';
import { Container } from 'react-bootstrap';
import "./style.css";

export default ({ children }) =>
    <Container className="container">
        {children}
    </Container>