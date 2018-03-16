import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import Containerinput from './Containerinput';
<<<<<<< HEAD

 
 let lat;

const coords = {
  lat: 24.4547200,
  lng: -97.9519500
};

console.log(document.querySelector('.Containermap'));


const params = {v: '3.exp', key: 'AIzaSyDZByw4yvPz0v8ugX7pLBg4HjtSCOtfkBg'};
 
class Mapa extends React.Component {
 
  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }
 
  onDragEnd(e) {
    console.log('onDragEnd', e);
  }
 
  onCloseClick() {
    console.log('onCloseClick');
  }
 
  onClick(e) {
    console.log('onClick', e);
  }
 
  render() {
    return (
      <Gmaps className='styleMap'
        width={'400px'}
        height={'200px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={6}
        loadingMessage={'Be happy'}
        params={params}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={'Hello, React :)'}
          onCloseClick={this.onCloseClick} />
        <Circle
          lat={coords.lat}
          lng={coords.lng}
          radius={500}
          onClick={this.onClick} />
      </Gmaps>
    );
  }
 
};
 


export default Mapa;