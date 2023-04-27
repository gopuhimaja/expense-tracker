import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
    const [isEditing, setEditing] = useState(false);
    const saveExpenseHandler = (enteredExpense) => {
        const expenses = {
            ...enteredExpense,
            id: Math.random().toString()
        };
        props.onAddExpenses(expenses);
        setEditing(false);
    }
    const startEditingHandler = () => {
        setEditing(true);
    }
    const stopEdiitingHandler = () => {
        setEditing(false);
    }
    return (
        <div className='new-expense'>
            {!isEditing && < button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onCancel={stopEdiitingHandler} onSaveExpenseData={saveExpenseHandler} />}
        </div>
    );
}

export default NewExpense;