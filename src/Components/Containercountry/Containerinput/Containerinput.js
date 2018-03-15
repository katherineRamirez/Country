//DOCUMENTACIÓN: https://www.robinwieruch.de/react-fetching-data/
import React, { Component } from 'react';

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
   
    value = input.value;
    console.log(value);

    const { hits } = this.state;
    {hits.map(hit =>
      
      {if (hit.name === value)(
        console.log(nameApi)
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
        <input className = 'input'>
        </input>
        <button onClick={this.Search}>Buscar</button>
        
      </div>
    );
  }
}

export default App;