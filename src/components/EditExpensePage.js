import React from "react";
import { connect } from "react-redux";
import ExpenseForm from './ExpenseForm.js';
import { editExpense, removeExpense } from '../actions/expenses.js';

const EditExpensePage = (props) => (
  <div>
    <ExpenseForm
      expense={props.expense}
      onSubmit={(expense) => {
        props.dispatch(editExpense(props.expense.id, expense));
        props.history.push('/');
      }}
    />
    <button
      onClick={() => {
        props.dispatch(removeExpense(props.expense.id));
        props.history.push('/');
      }}
    >
      Remove
    </button>
  </div>
);

const mapStateToProps = (state, outerProps) => {
  return {
    expense: state.expenses.find(expense => expense.id === outerProps.match.params.id)
  };
}

export default connect(mapStateToProps)(EditExpensePage);
