import React from 'react';

const ItemList = ({ items, deleteItem, editItem }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => editItem(index)}>Edit</button>
          <button onClick={() => deleteItem(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;