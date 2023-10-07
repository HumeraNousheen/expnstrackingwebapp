// CategoryListRemoveModal.js

import React from 'react';

const CategoryListRemoveModal = ({ category, handleRemoveCategory, navigateTo }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Remove Category</h1>
      <p>Are you sure you want to remove {category.name}?</p>
      <div style={{ marginTop: '20px', display: 'flex' }}>
        <button
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px',
            marginRight: '10px',
            cursor: 'pointer',
          }}
          onClick={handleRemoveCategory}
        >
          Confirm
        </button>
        <button
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px',
            cursor: 'pointer',
          }}
          onClick={() => navigateTo('categoryList')}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CategoryListRemoveModal;
