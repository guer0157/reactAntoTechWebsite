import React from 'react'
import {connect} from 'react-redux'
import store from '../../config/store'

function Cart(props){
    console.log("cart",store.getState())
    return(
        <table>
            <thead>
            <tr>
                <th>item</th>

                <th>Quantity</th>

                <th></th>

            </tr>
            </thead>
            <tbody>
                {
                    props.cart.map(item=>
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td><button onClick={()=>{props.addToCart(item)}}>+</button></td>
                            <td><button onClick={()=>{props.removeFromCart(item)}}>-</button></td>
                            <td><button onClick={()=>{props.removeAllFromCart(item)}}>Remove all</button></td>
                        </tr>
                        )

                }
            </tbody>
        </table>
    )
}
function mapStateToProps(state){
    return {
        cart:state.cart
       
    }
}

function mapDispatchToProps(dispatch){
    return{
    addToCart: (item) => {
        dispatch({type:'ADD', payload: item})
    },
    removeFromCart: item=>{
        dispatch({type:'REMOVE', payload:item})
    },
    removeAllFromCart:(item)=>{
        dispatch({type:'REMOVE_ALL', payload:item})
    }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)