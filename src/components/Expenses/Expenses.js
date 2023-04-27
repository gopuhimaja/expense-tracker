import React, { useState } from 'react';
import './Expenses.css';
import ExpenseList from './ExpensesList';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2021');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    };
    const filteredExpenses = props.items.filter((expense) => expense.date.getFullYear().toString() === filteredYear);
    return (
        <Card className='expenses'>
            <ExpenseFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpenseList items={filteredExpenses} />
        </Card>
    );
}
export default Expenses;