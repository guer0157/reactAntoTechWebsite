import React from  'react'
import Producto from './Producto'
import {connect} from 'react-redux'


function ListaProductos(props){
        return(
            <div className="product-listing">
            {props.seletedItem===true &&
            <div>
                Hello
            </div>
            }
                {props.producto.map( producto=>(
                        <Producto 
                        key={producto.id}
                        producto={producto}
                        cartItem={props.cart.filter(cartItem=>cartItem.id===producto.id)[0]}
                        addToCart={props.addToCart}
                        removeFromCart={props.removeFromCart}
                        seletedItem={props.seletedItem}
                        />
                ))
                }
            </div>

        )
    }

    function mapStateToProps(state){
        return {
            cart:state.cart,
        }
    }

    function mapDispatchToProps(dispatch){
        return{
        addToCart: (item) => {
            dispatch({type:'ADD', payload: item})
        },
        removeFromCart: item=>{
            dispatch({type:'REMOVE', payload:item})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListaProductos)
// export default ListaProductos