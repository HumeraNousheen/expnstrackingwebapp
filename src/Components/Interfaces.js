// Interfaces.js
export const ExpenseTypeEnum = {
  CashIn: 'Cash In',
  CashOut: 'Cash Out',
};

export const Categories = [
  { isMain: true, order: 1, name: 'Food' },
  { isMain: true, order: 2, name: 'Transportation' },
  { isMain: true, order: 3, name: 'Work' },
  { isMain: false, order: 4, name: 'Traveling' },
];

export const Expense = {
  id: '', // You may need to add an ID property
  type: ExpenseTypeEnum.CashIn,
  category: Categories[0], // Default category
  date: new Date(),
  amount: 0,
  description: '',
};
