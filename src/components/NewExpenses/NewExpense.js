import React from "react"
import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'



const NewExpense = (props) =>{
  const savedData = (event) =>{
    const data = {
      ...event,
      id: Math.random().toString()
    }

    props.onSavedData(data)

  }
  return(
    <div className = 'new-expense'>
    <ExpenseForm onEnteredData = {savedData} />
    </div>
)
}

export default NewExpense;
