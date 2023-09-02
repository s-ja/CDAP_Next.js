"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function List() {
  let product = ["tomatoes", "pasta", "coconut"];
  let [quantity, setQuantity] = useState(Array(product.length).fill(0));

  return (
    <div>
      <h4 className="title">product list</h4>
      {product.map((a, i) => {
        return (
          <div className="food" key={i}>
            <div className="food_img">
              <Image
                src={`https://codingapple.com/wp-content/uploads/2023/01/food${i}.png`}
                width={300}
                height={300}
                // sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt={`${i}'s img`}
              />
            </div>
            <h4>{a}</h4>
            <button
              onClick={() => {
                let newQuantity = [...quantity];
                newQuantity[i] = Math.max(newQuantity[i] - 1, 0);
                setQuantity(newQuantity);
              }}
            >
              -
            </button>
            <span>{quantity[i]}</span>
            <button
              onClick={() => {
                let newQuantity = [...quantity];
                newQuantity[i] = newQuantity[i] + 1;
                setQuantity(newQuantity);
              }}
            >
              +
            </button>
          </div>
        );
      })}
    </div>
  );
}
