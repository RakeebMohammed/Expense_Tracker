import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalStates/GlobalState';
function History() {

   
    const {value }=useContext(GlobalContext)
  const {DeleteTransaction} = useContext(GlobalContext)
  console.log(DeleteTransaction);
 console.log(value);
  return (
   <div> <h3>History</h3>
    <ul  className="list">
 
       { value.map(details=>(
        
           <li key={details.id} className={details.amount<0?"minus":'plus'}>
 {details.text}<span>{details.amount}</span><button onClick={()=>DeleteTransaction(details.id)} className="delete-btn">x</button>
 </li>   ))} 
    
  
 </ul>
 </div>
  )
}

export default History