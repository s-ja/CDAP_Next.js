import age, { name } from "./data";
import Hello from "./hello";

export default function Cart() {
  let cart = ["tomatoes", "pasta"];
  return (
    <div>
      <Hello name={name} />
      <h4 className="title">cart</h4>
      <CartItem cart={cart} />
    </div>
  );
}

function CartItem(props) {
  return (
    <div className="cart_item">
      <p>{props.cart[0]}</p>
      <p>$40</p>
      <p>1 ea</p>
    </div>
  );
}
