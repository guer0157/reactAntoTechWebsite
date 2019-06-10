import React from 'react'
export default function Producto(props) {

//    const thisItemInCart=props.cart.filter(item=>item.id===props.producto.id)[0]
const thisItemInCart={quantity:1}
    return (
        <div className="product-listing-item">
            <img height={100} title={props.producto.name} alt={props.producto.name}
                src={require(`../../img/${props.producto.image}`)} />
            <h2>{props.producto.description}</h2>
            <h3>{props.producto.name}</h3>
            <div>{props.producto.price} pesos m.x</div>
            <div>
                <button onClick={() => props.addToCart(props.producto)}>Add to cart ({(thisItemInCart && thisItemInCart.quantity) || 0})</button>
                {thisItemInCart ?
                    <button onClick={() => props.removeFromCart(thisItemInCart)}>Remove</button>
                    : null
                }
            </div>
        </div>
    )

}