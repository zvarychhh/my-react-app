import React from "react";
import { Card, Button } from "react-bootstrap";

const BinComponent = ({
  selectedItems = [],
  setTotalNull,
  removeFromSelectedItems,
  minusFromTotalPrice,
}) => {
  const removeItem = (item) => {
    removeFromSelectedItems(item);
    minusFromTotalPrice(item.price);
  };

  return (
    <section className="container">
    <div className="row col-9">
      {selectedItems.map((item) => (
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3" key={item.id}>
        <Card >
          <Card.Img variant="top" src={item.imgURL} height="150" />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.price} грн.</Card.Text>
            <Button variant="outline-secondary" onClick={() => {removeItem(item)}}>Видалити</Button>
          </Card.Body>
        </Card>
        </div>
      ))}
    </div>
    </section>
  );
};

export default BinComponent;
