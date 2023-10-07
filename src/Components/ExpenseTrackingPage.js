import React from 'react';

const pageStyles = {
  maxWidth: '400px',
  width: '90%',
  margin: '0 auto',
  padding: '20px',
  borderRadius: '8px',
  backgroundColor: '#fff',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  boxSizing: 'border-box',
  position: 'relative',
};

const sectionHeaderStyles = {
  borderBottom: '1px solid #ccc',
  marginBottom: '10px',
  paddingBottom: '5px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const totalAmountStyles = {
  fontWeight: 'bold',
};

const expenseCardStyles = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '10px',
  margin: '10px 0',
  display: 'flex',
  justifyContent: 'space-between',
};



const addExpenseButtonStyles = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  backgroundColor: '#007bff',
  color: 'white',
  padding: '10px',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
};

const categoryButtonStyles = {
  backgroundColor: 'green', // Customized color
  width: '50%', // Making the button wide
  marginRight: '10px', // Adding some margin to separate buttons
  padding: '10px',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
};
const ExpenseTrackingPage = ({ expenses, navigateTo }) => {
  const expensesByDate = expenses.reduce((acc, expense) => {
    const dateKey = new Date(expense.date).toLocaleDateString();
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(expense);
    return acc;
  }, {});

  return (
    <div style={pageStyles}>
      <button style={addExpenseButtonStyles} onClick={() => navigateTo('addExpense')}>
        Add
      </button>
      <h1>Expense Tracking</h1>
      {Object.keys(expensesByDate).map((date) => (
        <div key={date}>
          <div style={sectionHeaderStyles}>
            <h2>{date}</h2>
            <div style={totalAmountStyles}>
              Total: {expensesByDate[date].reduce((total, exp) => total + exp.amount, 0)}
            </div>
          </div>
          <div>
            {expensesByDate[date].map((expense) => (
              <div key={expense.id} style={expenseCardStyles}>
                <div>
                  <strong>Category:</strong> {expense.category ? expense.category.name : 'Unknown'}
                </div>
                <div>
                  {expense.type === 'Cash In' ? (
                    <span style={{ color: 'green' }}>+ {expense.amount}</span>
                  ) : (
                    <span style={{ color: 'red' }}>- {expense.amount}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button  style={categoryButtonStyles}onClick={() => navigateTo('categoryList')}>Categories</button>
    </div>
  );
};

export default ExpenseTrackingPage;
