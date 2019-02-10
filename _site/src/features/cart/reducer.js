//reducer will contain cart reducer
//first argument is always state, the second is the action
const cartWithoutItem=(cart, item)=>cart.filter(cartItem=>cartItem.id !== item.id)
const itemInCart=(cart, item)=>cart.filter(cartItem=>cartItem.id===item.id)[0]
const addToCart =(cart, item)=>{
    const cartItem = itemInCart(cart, item)
    return cartItem === undefined ? [...cartWithoutItem(cart,item),{...item, quantity:1}]
    : [...cartWithoutItem(cart,item),{...cartItem, quantity:cartItem.quantity+1}]
}
const removeFromCart=(cart,item)=>{
    return [...cartWithoutItem(cart, item)]
}
const removeAllFromCart=(cart,item)=>{
    return item.quantity === 1 ? [...cartWithoutItem(cart, item)] : [...cartWithoutItem(cart,item),{...item, quantity:item.quantity-1}]
}
const cartReducer = (state = [], action)=>{
    //switch statement will determine which action to run based on the type passed. 
    //type is a string.
    console.log(action.type)
    switch(action.type){
        case 'ADD':
        //we will return a new by destructuring the current state "...state" and adding the new value at the end ", action.payload ". 
        return addToCart(state, action.payload)
        case 'REMOVE':
        return removeFromCart(state, action.payload)
        case 'REMOVE_ALL':
        return removeAllFromCart(state, action.payload)
        default:
        return state;
    }
}
export default cartReducer