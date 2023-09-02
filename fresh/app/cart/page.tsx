import age, { name } from "./data";
import Hello from "./hello";

export default function Cart() {
  let cart = ["tomatoes", "pasta"];
  return (
    <div>
      <Hello name={name} />
      <h4 className="title">cart</h4>
      <CartItem item={cart[0]} />
      <CartItem item={cart[1]} />
      <Banner content={"현대카드"} />
      <Banner content={"삼성카드"} />
      <Button color={"red"} />
      <Button color={"blue"} />
      <Btn color={"blue"} />
      <Btn color={"red"} />
    </div>
  );
}

function Banner(props) {
  return <h5>{props.content} 결제 행사중</h5>;
}

function CartItem(props) {
  return (
    <div className="cart_item">
      <p>{props.item}</p>
      <p>$40</p>
      <p>1 ea</p>
    </div>
  );
}

function Button(props) {
  return <button className={props.color}>+</button>;
}

function Btn(props) {
  return <button style={{ backgroundColor: props.color }}>버튼</button>;
}
