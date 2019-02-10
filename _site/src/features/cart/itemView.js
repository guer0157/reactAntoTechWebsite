const selectedItem=(state=false, action)=>{
        //switch statement will determine which action to run based on the type passed. 
    //type is a string.
    switch(action.type){
        case 'SHOW':
        //we will return a new by destructuring the current state "...state" and adding the new value at the end ", action.payload ". 
        return true
        case 'HIDE':
        return false
        default:
        return state;
    }
}
export default selectedItem