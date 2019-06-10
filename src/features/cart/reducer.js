const cartReducer = (state = [], action)=>{
    //switch statement will determine which action to run based on the type passed. 
    //type is a string.
    console.log(action.type)
    switch(action.type){
        case 'ADD':
        //we will return a new by destructuring the current state "...state" and adding the new value at the end ", action.payload ". 
        return [...state, action.payload]
        case 'REMOVE':
            const firstMatchIndex= state.indexOf(action.payload)
        return state.filter((item, index)=>index !== firstMatchIndex)
        // case 'REMOVE_ALL':
        // return removeAllFromCart(state, action.payload)
        default:
        return state;
    }
}
export default cartReducer