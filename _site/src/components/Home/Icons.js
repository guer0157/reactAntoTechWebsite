import React from 'react'

export default function Icons(props){
return(
    <div className="section-icons-1">
    <h1>Tenemos todo lo que necesitas</h1>
        <ul>
        <li><h3>T-300</h3><img alt="T300" src={require('../../img/t300.png')}/></li>
        <li><h3>Multicode</h3><img alt="Multicode" src={require('../../img/t300.png')}/></li>
        <li><h3>Punch-A-Matic</h3><img alt="Punch-A-Matic" src={require('../../img/t300.png')}/></li>
        <li><h3>Ck-100</h3><img alt="CK 100" src={require('../../img/t300.png')}/></li>
        <li><h3>IKEY</h3><img alt="IKEY" src={require('../../img/t300.png')}/></li>
        <li><h3>Figo</h3><img alt="FIgo" src={require('../../img/t300.png')}/></li>
        </ul>   
    </div>
)
}