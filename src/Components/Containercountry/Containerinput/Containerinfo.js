import React from 'react';
import Containerinput from './Containerinput';
import './styleIfo.css';
import Containercapital from './Containercapital';
import Containerpopulation from './Containerpopulation';
import Containerlanguages from './Containerlanguages';
import Containercurrencies from './Containercurrencies';
import Containersubregion from './Containersubregion';
import Containerflag from './Containerflag';



const Containerinfo = () =>(
    <div className = 'Containerinfo'>

        <Containercapital></Containercapital>
        <Containerpopulation></Containerpopulation>
        <Containerlanguages></Containerlanguages>
        <Containercurrencies></Containercurrencies>
        <Containersubregion></Containersubregion>
        <Containerflag></Containerflag>
    </div>
)
export default Containerinfo;

