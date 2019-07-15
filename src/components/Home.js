import React from 'react';
import Header from './Home/Header';
import Icons from './Home/Icons';
import Eventos from './Home/Eventos';
import NuestroProductos from './Home/NuestroProductos';
import DisenoWeb from './Home/DisenoWeb';
import Featured from './Home/Featured';
import EnEventos from './Home/EnEventos';
import IniciativasSociales from './Home/IniciativasSociales';
import Footer from './Home/Footer';



export default function Home(props) {
    return (
     <div>
       <Header/>
       <Icons/>
       <Eventos/>
       <NuestroProductos/>
       <DisenoWeb/>
       <Featured/>
       <EnEventos/>
       <IniciativasSociales/>
       <Footer/>
     </div>
    )
}