export default function List() {
  let product = ["tomaotes", "pasta", "banana", "cherry"];
  return (
    <div>
      <h4 className="title">product list</h4>
      {product.map((a, i) => {
        return (
          <div className="food">
            <h4>{product[i]}</h4>
          </div>
        );
      })}
    </div>
  );
}
