// App.js
import React, { useState } from 'react';
import ExpenseTrackingPage from './Components/ExpenseTrackingPage';
import AddExpensePage from './Components/AddExpensePage';
import EditExpensePage from './Components/EditExpensePage';
import CategoryListPage from './Components/CategoryListPage';
import CategoryListRemoveModal from './Components/CategoryListRemoveModal';
import { ExpenseTypeEnum, Categories } from './Components/Interfaces';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [currentPage, setCurrentPage] = useState('expenseTracking');
  const [selectedExpense, setSelectedExpense] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setSelectedExpense(null);
    setSelectedCategory(null);
  };

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
    navigateTo('expenseTracking');
  };

  const commonProps = {
    expenses,
    setExpenses,
    navigateTo,
    selectedExpense,
    setSelectedExpense,
    selectedCategory,
    setSelectedCategory,
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'expenseTracking':
        return <ExpenseTrackingPage {...commonProps} />;
      case 'addExpense':
        return <AddExpensePage handleAddExpense={handleAddExpense} navigateTo={navigateTo} />;
      case 'editExpense':
        return <EditExpensePage {...commonProps} />;
      case 'categoryList':
        return <CategoryListPage {...commonProps} />;
      case 'categoryListRemoveModal':
        return <CategoryListRemoveModal {...commonProps} />;
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      {renderPage()}
    </div>
  );
};

export default App;
