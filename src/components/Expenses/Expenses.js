import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../Shared/Card';
import './Expenses.css';

const Expenses = ({ expenses }) => {
  return (
    <Card className="expenses">
      {expenses.map((exp, i) => {
        return <ExpenseItem key={i} expense={exp} />;
      })}
    </Card>
  );
};

export default Expenses;
