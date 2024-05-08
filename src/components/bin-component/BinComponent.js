import React from 'react';
import { Button } from "react-bootstrap";

const BinComponent = ({setTotalNull}) => {
return (
    <Button variant="outline-secondary" onClick={setTotalNull}>Очистити корзину</Button>
);
};
export default BinComponent;