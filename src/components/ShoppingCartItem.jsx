import { useState } from "react";
import formatter from "../formatter";


export default function ShoppingCartItem({ item, onRemoveItem, onAddItem, onDeleteItems }) {

  return (
    <li>
      <div id="item-data">
        {item.count}x {item.name} - {formatter.format(item.totalPrice)}
      </div>
      <div id="cart-item-buttons-group">
        <span id="add-or-remove-buttons">
          <button onClick={() => onRemoveItem(item.name)}>-</button>
          <button onClick={() => onAddItem(item.name)}>+</button>
        </span>
        <button onClick={() => onDeleteItems(item.name)} id="delete-button">Delete</button>
      </div>
    </li>
  );
}