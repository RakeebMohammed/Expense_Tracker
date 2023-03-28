export const Reducer=(state,action)=>{
    console.log(state);
    switch(action.type)
    {
        case 'Delete':
        return{
          ...state,
          transactions:state.transactions.filter(transaction=>transaction.id!==action.payload)
        }
        case 'Add':
            return {
                ...state,
                transactions:[action.payload,...state.transactions]
            }
        default :return state
    }
   

}