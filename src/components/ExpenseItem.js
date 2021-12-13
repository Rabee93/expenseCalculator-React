import React from "react";
import"./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate.js"
import Cards from "./Cards.js"

function ExpenseItem(props){

  const month =  props.date.toLocaleString('en-US',{month: 'long'});
  const day = props.date.toLocaleString('en-US',{day: '2-digit'});
  const year = props.date.getFullYear();

  const clickHandler = () =>{
    console.log("clicked")
  }


  return(
    <Cards className="expense-item">
    <ExpenseDate month={month} day={day} year={year}/>
    <div className="expense-item__description">
    <h2>{props.title}</h2>
    <div className="expense-item__price">${props.amount}</div>
    </div>
    <button onClick = {clickHandler}>click me</button>
    </Cards>

  )
}

export default ExpenseItem;
