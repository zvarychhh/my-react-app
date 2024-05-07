import React from 'react';
import { Card, Button } from "react-bootstrap";
const ShopCard = (props) => {
return (
<Card>
<Card.Img variant="top" src="logo192.png" />
<Card.Body>
<Card.Title>{props.card.title}</Card.Title>
<Card.Text>
{props.card.description}
</Card.Text>
<Button variant="outline-secondary">Go somewhere</Button>
</Card.Body>
</Card>
);
};
export default ShopCard;