import { useState } from "react";
import fruits from "./fruits.js";
import FruitOptions from "./components/FruitOptions.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";

function App() {
  const [currentItems, setCurrentItems] = useState([]);

  function handleAddItem(itemToAdd) {
    setCurrentItems((currentCart) => [itemToAdd, ...currentCart]);
  }

  function handleAddCartItem(itemNameToAdd) {
    setCurrentItems((currentCart) => {
      const firstMatchingIndex = currentCart.findIndex(
        (item) => item.name === itemNameToAdd
      );
      const itemObject = currentCart.find(
        (item) => item.name === itemNameToAdd
      );

      return currentCart.toSpliced(firstMatchingIndex, 0, itemObject);
    });
  }

  function handleRemoveCartItem(itemNameToRemove) {
    setCurrentItems((currentCart) => {
      const firstMatchingIndex = currentCart.findIndex(
        (item) => item.name === itemNameToRemove
      );

      const newCart = [...currentCart];
      newCart.splice(firstMatchingIndex, 1);

      return newCart;
    });
  }

  function handleDeleteItems(itemNameToDelete) {
    setCurrentItems((currentCart) =>
      currentCart.filter((item) => item.name != itemNameToDelete)
    );
  }

  return (
    <div id="main-content">
      <h1>Fruit Shopping</h1>

      <div className="links">
        <p>Find the source code here</p>
        <a
          href="https://github.com/Yolande0713/BookReviewProject"
          target="_blank"
          className="link"
        >
          Source Code
        </a>
        <p>Check out my other projects and find out more about me</p>
        <a
          href="https://yolande0713.github.io/"
          target="_blank"
          className="link"
        >
          Portfolio Site
        </a>
      </div>

      <div id="shopping-area">
        <FruitOptions fruits={fruits} onAddItem={handleAddItem} />
        <ShoppingCart
          shoppingCartItems={currentItems}
          onRemoveItem={handleRemoveCartItem}
          onAddItem={handleAddCartItem}
          onDeleteItems={handleDeleteItems}
        />
      </div>
    </div>
  );
}

export default App;
