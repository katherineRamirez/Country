//DOCUMENTACIÓN: https://www.robinwieruch.de/react-fetching-data/
import React, { Component } from 'react';
import Containerinfo from './Containerinfo';
import capital from './images/capital.png';
import population from './images/population.png';
import language from './images/language.png';
import coin from './images/coin.png';
import continent from './images/continent.png';
import Containermap from './ContainerMap';
import Mapa from './map';

import './style.css';


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
    input.innerHTML = '';

    let data;
    //USO DE MÉTODOS DE JAVASCRIPT PARA COLOCAR LA PRIMERA LETRA DE LA ENTRADA DEL USUARIO EN MAYUSCULA
    value = input.value.charAt(0).toUpperCase() + input.value.slice(1);

    const { hits } = this.state;
let flag;
    {hits.map(hit =>
      
      {if (hit.name === value)(
        document.querySelector('.header').innerHTML = '',
        document.querySelector('.header').appendChild(document.createElement('p').appendChild(document.createTextNode(hit.name))),

        document.querySelector('.Containercapital').innerHTML = '',
        document.querySelector('.Containercapital').appendChild(document.createElement('p').appendChild(document.createTextNode('CAPITAL'))),
        document.querySelector('.Containercapital').appendChild(document.createElement('p'))).appendChild(document.createTextNode(hit.capital),
        document.querySelector('.Containercapital').appendChild(document.createElement('img')).setAttribute('src', capital),

        document.querySelector('.Containerpopulation').innerHTML = '',
        document.querySelector('.Containerpopulation').appendChild(document.createElement('p').appendChild(document.createTextNode('POBLACIÓN'))),
        document.querySelector('.Containerpopulation').appendChild(document.createElement('p')).appendChild(document.createTextNode(hit.population)),
        document.querySelector('.Containerpopulation').appendChild(document.createElement('img')).setAttribute('src', population),

        document.querySelector('.Containerlanguages').innerHTML = '',
        document.querySelector('.Containerlanguages').appendChild(document.createElement('p').appendChild(document.createTextNode('IDIOMA'))),
        document.querySelector('.Containerlanguages').appendChild(document.createElement('p')).appendChild(document.createTextNode(hit.languages[0].name)),
        document.querySelector('.Containerlanguages').appendChild(document.createElement('img')).setAttribute('src', language),

        document.querySelector('.Containercurrencies').innerHTML = '',
        document.querySelector('.Containercurrencies').appendChild(document.createElement('p').appendChild(document.createTextNode('MONEDA'))),
        document.querySelector('.Containercurrencies').appendChild(document.createElement('p')).appendChild(document.createTextNode(hit.currencies[0].name)),
        document.querySelector('.Containercurrencies').appendChild(document.createElement('img')).setAttribute('src', coin),

        document.querySelector('.Containersubregion').innerHTML = '',
        document.querySelector('.Containersubregion').appendChild(document.createElement('p').appendChild(document.createTextNode('SUBREGIÓN'))),
        document.querySelector('.Containersubregion').appendChild(document.createElement('p')).appendChild(document.createTextNode(hit.subregion)),
        document.querySelector('.Containersubregion').appendChild(document.createElement('img')).setAttribute('src', continent),

        document.querySelector('.Containerflag').innerHTML = '',
        document.querySelector('.Containerflag').appendChild(document.createElement('p').appendChild(document.createTextNode('BANDERA'))),
        document.querySelector('.Containerflag').appendChild(document.createElement('img')).setAttribute('src', hit.flag)
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
        
        <input placeholder="Indique el nombre del país" className = 'input'>
        </input>
        <button onClick={this.Search}>Buscar</button>
        <Containerinfo>

        </Containerinfo>
      </div>
    );                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
  }
}

export default App;