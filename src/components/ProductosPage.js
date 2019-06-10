import React from 'react';
import ListaProductos from '../features/product-listing/ListaProductos'
import data from '../data/products.json'

export default function ProductosPage(props){
return(
<div>
    <h2>Todos los productos</h2>
    <ListaProductos producto={data.products}/>
</div>
)
}