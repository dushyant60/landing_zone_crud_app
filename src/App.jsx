import React, { useState } from 'react';
import './App.css'; // Import the CSS file
import CreateItem from './components/CreateItem';
import ItemList from './components/ItemList';
import EditItem from './components/EditItem';

const App = () => {
  const [items, setItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const editItem = (index) => {
    setIsEditing(true);
    setCurrentIndex(index);
  };

  const updateItem = (index, newItem) => {
    const updatedItems = items.map((item, i) =>
      i === index ? newItem : item
    );
    setItems(updatedItems);
    setIsEditing(false);
  };

  return (
    <div className="app-container">
      <h1>CRUD App</h1>
      {isEditing ? (
        <EditItem
          currentItem={items[currentIndex]}
          updateItem={updateItem}
          index={currentIndex}
        />
      ) : (
        <CreateItem addItem={addItem} />
      )}
      <ItemList items={items} deleteItem={deleteItem} editItem={editItem} />
    </div>
  );
};

export default App;