import React from 'react'


export default function Producto(props){
 
console.log(props)
        return(
            <div className="product-listing-item">
                <img height={100} title={props.producto.name} alt={props.producto.name} 
            src={require (`../../img/${props.producto.image}`)}/>
                <h2>{props.producto.description}</h2>
                <h3>{props.producto.name}</h3>
                <div>{props.producto.price} pesos m.x</div>
                <div>
                    <button onClick={()=> props.addToCart(props.producto)}>Add to cart ({(props.cartItem&&props.cartItem.quantity) || 0})</button>
                    {props.cartItem ?
                    <button onClick={()=> props.removeFromCart(props.cartItem)}>Remove</button>
                    : null
                    }
                </div>
            </div>
        )
    
}