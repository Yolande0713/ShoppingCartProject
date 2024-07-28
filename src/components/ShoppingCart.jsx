import ShoppingCartItem from "./ShoppingCartItem";
import formatter from "../formatter";

function deriveCart(shoppingCartItems) {
  //if no items return empty array
  if (shoppingCartItems.length === 0) return [];

  const items = [];

  //loop through all the items in the cart
  shoppingCartItems.map(shoppingCartItem => {
    const aggregateItem = items.find(item => item.name === shoppingCartItem.name);

    //if item added increment count and add to totoal price
    if (aggregateItem) {
      aggregateItem.totalPrice += shoppingCartItem.price;
      aggregateItem.count++;
    }
    //if not added add item
    else {
      items.push({
        name: shoppingCartItem.name,
        totalPrice: shoppingCartItem.price,
        count: 1
      });
    }
  });

  return items;
}

export default function ShoppingCart({ shoppingCartItems, onRemoveItem, onAddItem, onDeleteItems }) {
  const items = deriveCart(shoppingCartItems);

  let finalPrice = 0;
  items.map(item => { finalPrice += item.totalPrice });

  return (
    <>
      <h2 id="shopping-cart-title">Your Cart:</h2>
      <div id='shopping-cart'>
        <ol>
          {items.map(item =>
            <ShoppingCartItem
              key={item.name}
              item={item}
              onRemoveItem={onRemoveItem}
              onAddItem={onAddItem}
              onDeleteItems={onDeleteItems}
            />
          )}
        </ol>
        <p>
          Total Price: {formatter.format(finalPrice)}
        </p>
      </div>
    </>
  );
}