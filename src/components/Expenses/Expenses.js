import React , {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter"
import "./Expenses.css"
import Cards from "../UI/Cards"

function Expenses(props){
const [savedData, setSavedData] = useState('2020');
const savedFilteredData = filteredData => {
setSavedData(filteredData)
console.log('filtered')
}

  return(
    <div>
    <Cards className = "expenses">
    <ExpensesFilter selected= {savedData} onFilter = {savedFilteredData}/>
   {props.items.map((expense) => (<ExpenseItem title = {expense.title}
      amount = {expense.amount}
      date= {expense.date}/>
    ))}
    </Cards>
    </div>
  )
}

export default Expenses;
