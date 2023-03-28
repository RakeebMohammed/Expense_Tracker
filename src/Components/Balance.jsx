import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../GlobalStates/GlobalState'

function Balance() {
 const {value} = useContext(GlobalContext)
 const amount=value.map(cash=>cash.amount)
 console.log(amount);
 const total=amount.reduce((sum,acc)=>(sum+=acc),0).toFixed(2)
 
 //console.log(total);
    return (
 <div>
  <h4 style={{textTransform:'none'}}>
  Available Balance :</h4>
      <h2>${total}</h2>   
 </div>   
  )
}

export default Balance