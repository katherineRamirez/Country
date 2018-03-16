//DOCUMENTACIÓN: https://www.robinwieruch.de/react-fetching-data/
import React, { Component } from 'react';
import Containerinfo from './Containerinfo';
import capital from './images/capital.png';
import population from './images/population.png';
import language from './images/language.png';
import coin from './images/coin.png';
import continent from './images/continent.png';
import Apps from './map';

//HACER UNA CONSTANTE QUE CONTENGA EL URL DE LA API
const API = 'https://restcountries.eu/rest/v2/all';
let value ='';
class App extends Component{
  constructor(props){
    super(props);
    //SE CREA UN ESTADO INICIAL
    this.state = {
      hits:[]
    }
  }
  componentWillMount(){
    fetch(API)
    .then(response => response.json())
    //LA MANERA DE PLANTEAR LA BUSQUEDA DEPENDE DE CÓMO LA API
    //MUESTRA LOS RESULTADOS. EJEMPLO: ({hits:data})
    //EL SEGUNDO HIST QUIERE DECIR QUE LA API MUESTRA LOS
    //RESULTADOS Y COMIENZA EL ENCABEZADO CON LA PALABRA hist
    //SINO COMIENZA CON NADA COMO EN ESTE CASO, NO SE COLOCA NADA
    .then(data => this.setState({ hits: data }),

  );
  }
  
  //MÉTODO QUE PERMITE QUE SE EJECUTE EL PROCESO UNA VEZ 
  //RENDER() SE EJECUTA
  Search = () =>{
    const input = document.querySelector('.input');
    let data;
    value = input.value;

    const { hits } = this.state;
let flag;
    {hits.map(hit =>
      
      {if (hit.name === value)(
        document.querySelector('.header').appendChild(document.createElement('p').appendChild(document.createTextNode(hit.name))),

        document.querySelector('.Containercapital').appendChild(document.createElement('p').appendChild(document.createTextNode(hit.capital))),
        document.querySelector('.Containercapital').appendChild(document.createElement('img')).setAttribute('src', capital),

        document.querySelector('.Containerpopulation').appendChild(document.createElement('p').appendChild(document.createTextNode(hit.population))),
        document.querySelector('.Containerpopulation').appendChild(document.createElement('img')).setAttribute('src', population),

        document.querySelector('.Containerlanguages').appendChild(document.createElement('p').appendChild(document.createTextNode(hit.languages[0].name))),
        document.querySelector('.Containerlanguages').appendChild(document.createElement('img')).setAttribute('src', language),

        document.querySelector('.Containercurrencies').appendChild(document.createElement('p').appendChild(document.createTextNode(hit.currencies[0].name))),
        document.querySelector('.Containercurrencies').appendChild(document.createElement('img')).setAttribute('src', coin),

        document.querySelector('.Containersubregion').appendChild(document.createElement('p').appendChild(document.createTextNode(hit.subregion))),
        document.querySelector('.Containersubregion').appendChild(document.createElement('img')).setAttribute('src', continent)
      )
      }
      )
      }
    //DE ACUERDO CON LA CATEGORÍA SELECCIONADA SE BUSCA EN LA API
  }
      
  //EVENTO PARA SELECCIONAR CATEGORIAS
  
  //SE RENDERIZAN LOS RESULTADO
  render() {
    return (
      <div>
        {/* DE ESTA MANERA RECORRO LA API Y MUESTRO LOS NOMBRES, 
        CON MAP, EN VEZ DE CON UN BUCLE FOR.
        EL SELECT LO COLOCO FUERA DEL MAP PORQUE NECESITO
        ES CREAR LAS OPCIONES */}
        <strong><label className = 'label'>QUE PAIS TE GUSTARIA CONOCER?</label></strong>
        <input placeholder="Indique el nombre del país" className = 'input'>
        </input>
        <button onClick={this.Search}>Buscar</button>
        <div>{this.nameinput}</div>
        <Apps></Apps>
        <Containerinfo></Containerinfo>
      </div>
    );                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
  }
}

export default App;