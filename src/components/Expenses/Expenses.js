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
    <ExpenseItem
    title = {props.expense0.title}
    amount = {props.expense0.amount}
    date = {props.expense0.date}
    />

    <ExpenseItem
    title= {props.expense1.title}
    amount = {props.expense1.amount}
    date = {props.expense1.date}
    />

    <ExpenseItem
    title= {props.expense2.title}
    amount = {props.expense2.amount}
    date = {props.expense2.date}
    />

    <ExpenseItem
    title = {props.expense3.title}
    amount = {props.expense3.amount}
    date = {props.expense3.date}
    />
    </Cards>
    </div>
  )
}

export default Expenses;
