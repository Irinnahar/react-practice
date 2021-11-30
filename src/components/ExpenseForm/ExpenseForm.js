import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [titleInput, setTitleInput] = useState('');
  const [amountInput, setAmountInput] = useState('');
  const [dateInput, setDateInput] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: titleInput,
      amount: amountInput,
      date: new Date(dateInput),
    };
    props.onSaveExpenseData(expenseData);
    setTitleInput('');
    setAmountInput('');
    setDateInput('');
  };

  const onTitleChangeHandler = (e) => {
    setTitleInput(e.target.value);
  };

  const onAmountChangeHandler = (e) => {
    setAmountInput(e.target.value);
  };

  const onDateChangeHandler = (e) => {
    setDateInput(e.target.value);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label className="new-expense__control label">Title</label>
          <input
            onChange={onTitleChangeHandler}
            value={titleInput}
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label className="new-expense__control label">Amount</label>
          <input
            onChange={onAmountChangeHandler}
            value={amountInput}
            name="amount"
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label className="new-expense__control label">Date</label>
          <input
            onChange={onDateChangeHandler}
            value={dateInput}
            name="date"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
