import Image from "next/image";

export default function List() {
  let product = ["tomatoes", "pasta", "coconut"];
  return (
    <div>
      <h4 className="title">product list</h4>
      {product.map((a, i) => {
        return (
          <div className="food" key={i}>
            <div className="food_img">
              <Image
                src={`https://codingapple.com/wp-content/uploads/2023/01/food${i}.png`}
                width={500}
                height={400}
                layout="responsive"
                alt={`${i}'s img`}
              />
            </div>
            <img src="" alt="" />
            <h4>{a}</h4>
          </div>
        );
      })}
    </div>
  );
}
