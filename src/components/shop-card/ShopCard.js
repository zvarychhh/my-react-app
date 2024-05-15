import React from "react";
import { Card, Button } from "react-bootstrap";

const ShopCard = ({ card, addToBin }) => {
  const addItem = () => {
    addToBin(card);
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
      <Card>
        <Card.Img variant="top" src={card.imgURL} height="150" />
        <Card.Body>
          <div className="text-center">
            <Card.Title>{card.title}</Card.Title>
            <Card.Text className="m-3">{card.price} грн.</Card.Text>
          </div>
          <Button variant="outline-secondary" onClick={addItem}>Add</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ShopCard;
