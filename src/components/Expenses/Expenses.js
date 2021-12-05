import React, { useState } from 'react';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../Shared/Card';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpense} />

      {filteredExpense.length === 0 ? (
        <h2 className="expenses-list__fallback ">No Expense Found!!</h2>
      ) : (
        filteredExpense.map((exp) => {
          return (
            <div>
              <ExpenseItem
                className="expenses-list"
                key={exp.id}
                expense={exp}
              />
            </div>
          );
        })
      )}
    </Card>
  );
};

export default Expenses;
