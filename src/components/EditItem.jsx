import React, { useState } from 'react';

const EditItem = ({ currentItem, updateItem, index }) => {
  const [newItem, setNewItem] = useState(currentItem);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateItem(index, newItem);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditItem;