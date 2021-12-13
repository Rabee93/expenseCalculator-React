import React, {useState} from "react";
import"./ExpenseItem.css"
import ExpenseDate from "../Expenses/ExpenseDate.js"
import Cards from "../UI/Cards.js"

function ExpenseItem(props){
  let title = props.title



  const clickHandler = () =>{
    console.log("clicked")
  }


  return(
    <Cards className="expense-item">
    <ExpenseDate date = {props.date}/>
    <div className="expense-item__description">
    <h2>{title}</h2>
    <div className="expense-item__price">${props.amount}</div>
    </div>
    <button onClick = {clickHandler}>click me</button>
    </Cards>

  )
}

export default ExpenseItem;
