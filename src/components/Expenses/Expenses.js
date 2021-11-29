import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../Shared/Card';

const Expenses = ({ expenses }) => {
  return (
    <Card className="expenses">
      {expenses.map((exp) => {
        return <ExpenseItem expense={exp} />;
      })}
    </Card>
  );
};

export default Expenses;
