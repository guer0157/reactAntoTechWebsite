import React from 'react'
import {connect} from 'react-redux'
function Cart(props){

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
                        <tr key={item.id}>
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
    console.log(state)
    return {
        cart:state.cart,
    }
}

export default connect(mapStateToProps)(Cart)