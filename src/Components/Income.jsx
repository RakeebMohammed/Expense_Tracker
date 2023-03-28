import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../GlobalStates/GlobalState'

function Income() {
    const {value} = useContext(GlobalContext)
    const amount=value.map(cash=>cash.amount)
    const income=amount.filter(amount=>amount>0).reduce((sum,acc)=>sum+=acc,0)
    console.log(income);
    const expense=amount.filter(amount=>amount<0).reduce((sum,acc)=>sum+=acc,0)*-1
  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p  className="money plus">${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p  className="money minus">${expense}</p>
        </div>
      </div>
  )
}

export default Income