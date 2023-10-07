// AddExpensePage.js
import React, { useState, useEffect } from 'react';
import { Categories } from './Interfaces';

const pageStyles = {
  maxWidth: '400px',
  width: '90%',
  margin: '0 auto',
  padding: '20px',
  borderRadius: '8px',
  backgroundColor: '#fff',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  boxSizing: 'border-box',
};

const inputStyles = {
  width: '100%',
  padding: '10px',
  margin: '10px 0',
  borderRadius: '4px',
  border: '1px solid #ccc',
  boxSizing: 'border-box',
};

const selectStyles = {
  ...inputStyles,
  cursor: 'pointer',
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

const AddExpensePage = ({ handleAddExpense, navigateTo }) => {
  const [type, setType] = useState('Cash In');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const storedCategories = JSON.parse(localStorage.getItem('categories')) || Categories;
    setCategories(storedCategories);
  }, []);

  const handleSave = () => {
    const newExpense = { type, category, amount, description, date };
    handleAddExpense(newExpense);
    navigateTo('expenseTracking');
  };

  return (
    <div style={{ ...pageStyles, textAlign: 'center' }}>
      <div style={{ marginBottom: '20px' }}>
        <button
          style={{
            ...buttonStyles,
            backgroundColor: type === 'Cash In' ? '#007bff' : 'lightgray',
          }}
          onClick={() => setType('Cash In')}
        >
          Cash In
        </button>
        <button
          style={{
            ...buttonStyles,
            backgroundColor: type === 'Cash Out' ? '#007bff' : 'lightgray',
          }}
          onClick={() => setType('Cash Out')}
        >
          Cash Out
        </button>
      </div>
      <h1>Add Expense</h1>
      <form style={{ textAlign: 'left' }}>
        <div>
          <label>
            <strong>Category:</strong>
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={selectStyles}
          >
            <option value="">Select Category</option>
            {categories && categories.length > 0 && categories.map((cat) => (
              <option key={cat.name} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>
            <strong>Amount:</strong>
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={inputStyles}
          />
        </div>
        <div>
          <label>
            <strong>Date:</strong>
          </label>
          <input
            type="date"
            value={date.toISOString().split('T')[0]}
            onChange={(e) => setDate(new Date(e.target.value))}
            style={inputStyles}
          />
        </div>
        <div>
          <label>
            <strong>Description:</strong>
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={inputStyles}
          />
        </div>
      </form>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
        <button style={{ ...buttonStyles, width: '48%' }} onClick={handleSave}>
          Save
        </button>
        <button style={{ ...buttonStyles, width: '48%' }} onClick={() => navigateTo('expenseTracking')}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddExpensePage;
