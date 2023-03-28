import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { GlobalContext } from '../GlobalStates/GlobalState'

function AddTransaction() {
    const {AddTransaction} = useContext(GlobalContext)
    const [Data, setData] = useState('')
    const [Amount, setAmount] = useState('')
    //console.log(Data);
    const addTransaction=(e)=>{
  e.preventDefault()
    let transaction={
       id:Math.random(),
        text:Data,
        amount:+Amount
     }
     console.log('ethi');
AddTransaction(transaction)
setData('')
setAmount('')
    }
  return (
    <div>
          <h3>Add new transaction</h3>
      <form >
        <div className="form-control">
          <label >Text</label>
          <input value={Data} onChange={(e)=>setData(e.target.value)} type="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label 
            >Amount <br />
            (negative - expense, positive - income)</label>
          <input value={Amount} onChange={(e)=>setAmount(e.target.value)} type="text"placeholder="Enter amount..." />
        </div>
        <button   onClick={addTransaction} className="btn">Add transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction