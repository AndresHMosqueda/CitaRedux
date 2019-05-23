import React, { Component } from 'react';

//REDUX

import {connect} from 'react-redux';
import {borrarCita} from '../actions/citasActions'

class Cita extends Component {

    eliminarCita = () => {
        this.props.borrarCita(this.props.info.id);
    }
    
    render() { 
        const {fecha, hora, mascota, propietario, sintomas} = this.props.info
        return (
            <div className="media mt-3">
            <div className="media-body">
                <h3 className="mt-3">{mascota}</h3>
                <p className="card-text">Nombre del Dueño: {propietario}</p>
                <p className="card-text">Fecha: {fecha} </p>
                <p className="card-text">Hora: {hora} </p>
                <p className="card-text">Sintomas: </p>
                <p className="card-text"> {sintomas} </p>

                <button className="btn btn-danger" onClick={this.eliminarCita}>Borrar &times; </button>
                </div>                
            </div>
          );
    }
}
 
export default connect(null, {borrarCita}) (Cita);