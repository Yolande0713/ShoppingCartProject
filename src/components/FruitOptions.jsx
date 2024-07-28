import FruitOption from "./FruitOption";


export default function FruitOptions({ fruits, onAddItem }) {

  return (
    <>
      <h2>Fruit Options</h2>

      <ul id='fruit-options'>
        {fruits.map(fruit => (
          <FruitOption onAddItem={onAddItem} key={fruit.name} fruit={fruit} />
        ))}
      </ul>
    </>
  );
}