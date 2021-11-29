import React from 'react';

import Card from '../Shared/Card';
import './ExpenseDate.css';

const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString('en-Us', { month: 'long' });
  const day = date.toLocaleString('en-Us', { day: '2-digit' });
  const year = date.toLocaleString('en-Us', { year: 'numeric' });

  return (
    <Card className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </Card>
  );
};

export default ExpenseDate;
