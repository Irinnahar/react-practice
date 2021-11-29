import React, { useState } from 'react';
import Card from '../Shared/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = ({ expense }) => {
  const [title, setTitle] = useState(expense.title);
  const changeTitle = (e) => {
    e.preventDefault();
    setTitle('hello ther');
  };
  return (
    <Card className="expense-item ">
      <ExpenseDate date={expense.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{expense.amount}</div>
        <button onClick={changeTitle}>Click here</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
