import React from 'react';

const Center = ({ children, top,bottom }) =>
    <div style={{ marginTop: top, marginBottom:bottom }} 
    className="d-flex justify-content-center" >{children}</div>


export default Center;