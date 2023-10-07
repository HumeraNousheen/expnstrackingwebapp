// CategoryListPage.js

import React, { useState, useEffect } from 'react';

const pageStyles = {
  maxWidth: '400px',
  width: '90%',
  margin: '0 auto',
  padding: '20px',
  borderRadius: '8px',
  backgroundColor: '#fff',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  boxSizing: 'border-box',
  textAlign: 'center',
};

const headingStyles = {
  fontSize: '24px',
  marginBottom: '20px',
};

const cardStyles = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '15px',
  margin: '10px 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const inputStyles = {
  width: '70%',
  padding: '10px',
  margin: '10px 0',
  borderRadius: '4px',
  border: '1px solid #ccc',
  boxSizing: 'border-box',
};

const buttonStyles = {
  backgroundColor: '#007bff',
  color: 'white',
  padding: '15px',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  margin: '10px 5px',
};

const CategoryListPage = ({ navigateTo }) => {
  const [newCategory, setNewCategory] = useState('');
  const [categories, setCategories] = useState([]);

  // Load categories from local storage on component mount
  useEffect(() => {
    const storedCategories = JSON.parse(localStorage.getItem('categories')) || [];
    setCategories(storedCategories);
  }, []);

  const handleAddCategory = () => {
    if (newCategory.trim() !== '') {
      const newCategoryObj = { id: categories.length + 1, name: newCategory };
      const updatedCategories = [...categories, newCategoryObj];

      // Update state
      setCategories(updatedCategories);

      // Update local storage
      localStorage.setItem('categories', JSON.stringify(updatedCategories));

      setNewCategory('');
    }
  };

  const handleRemoveCategory = (categoryId) => {
    const updatedCategories = categories.filter((cat) => cat.id !== categoryId);

    // Update state
    setCategories(updatedCategories);

    // Update local storage
    localStorage.setItem('categories', JSON.stringify(updatedCategories));
  };

  return (
    <div style={pageStyles}>
      <h1 style={headingStyles}>Category List</h1>
      <div>
        <div style={{ marginBottom: '10px', textAlign: 'left', fontWeight: 'bold' }}>
          Existing Categories:
        </div>
        <div style={{ textAlign: 'left' }}>
          {categories.map((category) => (
            <div key={category.id} style={cardStyles}>
              <div>{category.name}</div>
              <button
                style={{ marginLeft: '10px', backgroundColor: 'red' }}
                onClick={() => handleRemoveCategory(category.id)}
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          style={inputStyles}
          placeholder="New Category"
        />
        <button style={buttonStyles} onClick={handleAddCategory}>
          Add
        </button>
      </div>
      <button style={buttonStyles} onClick={() => navigateTo('expenseTracking')}>
        Back to Expense Tracking
      </button>
    </div>
  );
};

export default CategoryListPage;
