import React from 'react';
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpenses/NewExpense.js"


function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = (expense) =>{
    console.log('added APP')
    console.log(expense)
  }

  return (
    <div>
      <NewExpense onSavedData ={addExpenseHandler} />
      <Expenses
      expense0 ={expenses[0]}
      expense1={expenses[1]}
      expense2={expenses[2]}
      expense3={expenses[3]}/>

    </div>
  );
}

export default App;
