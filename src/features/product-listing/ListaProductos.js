import React from  'react'
import Producto from './Producto'
import {connect} from 'react-redux'
// import cartItemsWithQuantities from '../cart/cart';

function ListaProductos(props){
    console.log("Ze props",props)
        return(
            <div className="product-listing">
                {props.producto.map( producto=>(
                        <Producto 
                        key={producto.id}
                        producto={producto}
                        addToCart={props.addToCart}
                        // cart={cartItemsWithQuantities(props.cart)}
                        />
                ))
                }
            </div>

        )
    }

    function mapStateToProps(state){
        console.log(state)
        return {
            cart:state.cart,
        }
    }
//this dispatches an action to the store.
    function mapDispatchToProps(dispatch){
        console.log("Dispatch", dispatch)
        return{
        addToCart: item => {
            console.log("where is this item",item);
            dispatch({type:'ADD', payload: item})},
        removeFromCart: item => dispatch({type:'REMOVE', payload:item})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListaProductos)