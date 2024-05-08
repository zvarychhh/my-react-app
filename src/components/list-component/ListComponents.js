import React from "react";
import ShopCard from "../shop-card/ShopCard";
import { Button } from "react-bootstrap";

const ListComponents = ({addToTotalPrice }) => {
    const itemList = [{id:1, title: "Apple", price: 25, imgURL: require("../../imgs/apple.jpg") },
    {id:2, title: "Banana", price: 45, imgURL: require("../../imgs/banana.jpg") },
    {id:3, title: "Strawberry", price: 35, imgURL: require("../../imgs/strawberry.jpg") }
        
    ];
  return (
    <section className="container">
      <div className="row col-9">
        
        {itemList.map((item) => (
            <ShopCard key={item.id} card={item} addToTotalPrice={addToTotalPrice} />
        ))}

      </div>
    </section>
  );
};


export default ListComponents;
