//DOCUMENTACIÓN: https://www.robinwieruch.de/react-fetching-data/
import React, { Component } from 'react';
import Containerinfo from './Containerinput/Containerinfo';
import App from './../../App.js';

let header = document.querySelector('.header');
let country = document.querySelector('.Containercountry');
let presentation = document.querySelector('.presentation');
//HACER UNA CONSTANTE QUE CONTENGA EL URL DE LA API
class Presentation extends Component{
  constructor(props){
    super(props);
    //SE CREA UN ESTADO INICIAL
    this.state = {
      presentation: presentation.style.display = 'inline',
      header : header.style.display = 'none',
      country : country.style.display = 'none'
    }
  }
  
  
  //MÉTODO QUE PERMITE QUE SE EJECUTE EL PROCESO UNA VEZ 
  //RENDER() SE EJECUTA
  Start = () =>{
    this.setState({
      presentation: presentation.style.display = 'none',
      header : header.style.display = 'inline',
      country : country.style.display = 'inline'
    })
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
        <button onClick={this.Start}>Start</button>
      </div>
    );                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
  }
}

export default Presentation;