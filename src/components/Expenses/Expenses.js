import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

function Expenses(props) {
  const [originalValue, newValue] = useState("2021");

  function saveDropDown(selectedDropDown) {
    newValue(selectedDropDown);
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === originalValue;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter defaultYear={originalValue} onDropDown={saveDropDown} />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
