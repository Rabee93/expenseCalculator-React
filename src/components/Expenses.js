import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Cards from "./Cards"

function Expenses(props){
  return(
    <Cards className = "expenses">
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
  )
}

export default Expenses;
