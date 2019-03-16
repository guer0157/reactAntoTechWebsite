import React from 'react';
import Header from './Home/Header';
import Icons from './Home/Icons';
import Eventos from './Home/Eventos';
import NuestroProductos from './Home/NuestroProductos';



export default function Home(props) {
    return (
     <div>
       <Header/>
       <Icons/>
       <Eventos/>
       <NuestroProductos/>
     </div>
    )
}