
export default function FruitOption({ fruit, onAddItem }) {


  return (
    <li>
      <p>{fruit.name}</p>
      <p className="price">${fruit.price}</p>
      <button onClick={() => onAddItem(fruit)}>Add to cart</button>
    </li>
  );
}