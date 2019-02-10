import React from 'react';
import Header from './Home/Header';
import Icons from './Home/Icons';
import Eventos from './Home/Eventos';



export default function Home(props) {
    return (
     <div>
       <Header/>
       <Icons/>
       <Eventos/>
     </div>
    )
}