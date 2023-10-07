// EditExpensePage.js

import React from 'react';

const EditExpensePage = ({ expense, handleUpdateExpense, handleRemoveExpense, navigateTo }) => {
  const [type, setType] = React.useState(expense.type);
  const [category, setCategory] = React.useState(expense.category);
  const [amount, setAmount] = React.useState(expense.amount);

  const handleUpdate = () => {
    const updatedExpense = { ...expense, type, category, amount };
    handleUpdateExpense(updatedExpense);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Edit Expense</h1>
      <form style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
        <label>
          Type:
          <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
        </label>
        <label>
          Category:
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </label>
        <label>
          Amount:
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label>
      </form>
      <div style={{ marginTop: '20px', display: 'flex' }}>
        <button
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px',
            marginRight: '10px',
            cursor: 'pointer',
          }}
          onClick={handleUpdate}
        >
          Update
        </button>
        <button
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px',
            marginRight: '10px',
            cursor: 'pointer',
          }}
          onClick={handleRemoveExpense}
        >
          Remove
        </button>
        <button
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px',
            cursor: 'pointer',
          }}
          onClick={() => navigateTo('expenseTracking')}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditExpensePage;
