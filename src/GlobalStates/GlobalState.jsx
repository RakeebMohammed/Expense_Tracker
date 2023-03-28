import React from "react";
import { createContext } from "react";
import { useReducer } from "react";
import { Reducer } from "./Reducer";
 
const InitialState={
    transactions:[{ id: 1, text: 'Flower', amount: -20 },
       { id: 2, text: 'Salary', amount: 300 },
     { id: 3, text: 'Book', amount: -10 },
   { id: 4, text: 'Camera', amount: 150 }]
}
export const GlobalContext=createContext(InitialState)
export const GlobalProvider=({children})=>{
    const [state, dispatch] = useReducer(Reducer,InitialState)
   const DeleteTransaction=(id)=>{
        dispatch({
            type:'Delete',
            payload:id
        })
    }
    function AddTransaction(transaction){
        dispatch({
            type:'Add',
            payload:transaction
        })
    }
    return (
        <GlobalContext.Provider value={{value:state.transactions
        ,DeleteTransaction,
        AddTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}