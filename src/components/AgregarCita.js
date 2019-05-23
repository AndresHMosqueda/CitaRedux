import React, { Component } from "react";
import uuid from 'uuid';

//Redux
import {connect} from 'react-redux';
import {agregarCita} from '../actions/citasActions';
import {validarFormulario, mostrarError} from '../actions/errorActions'

class AgregarCita extends Component {
  
 //refs
 nombreMascotaRef = React.createRef();
 propietarioRef = React.createRef();
 fechaRef = React.createRef();
 horaRef = React.createRef();
 sintomasRef = React.createRef();

 componentWillMount() {
   this.props.validarFormulario(false);
 }

 //leer cita
  crearNuevaCita = e => {
    e.preventDefault()
    
    const mascota = this.nombreMascotaRef.current.value,
          propietario = this.propietarioRef.current.value,
          fecha = this.fechaRef.current.value,
          hora = this.horaRef.current.value,
          sintomas = this.sintomasRef.current.value

          if(mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === '') {
              this.props.validarFormulario(true);
          } else {

            //crear el objeto
              const nuevaCita = {
                  id: uuid(),
                  mascota,
                  propietario,
                  hora,
                  fecha,
                  sintomas
              }
              this.props.validarFormulario(false);
              
              //se envia el objeto hacia el padre para actualizar el state
              this.props.agregarCita(nuevaCita)

             //Reiniciar el formulario
             e.currentTarget.reset();
          
          }    
  }

  render() {
    
    const existeError = this.props.error;
    return (
      <div className="card mt-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">Agrega las citas aqui</h2>

          <form onSubmit={this.crearNuevaCita}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Mascota
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                ref={this.nombreMascotaRef}
                  type="text"
                  className="form-control"
                  placeholder="Nombre Mascota"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Dueño
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                ref={this.propietarioRef}
                  type="text"
                  className="form-control"
                  placeholder="Nombre Dueño de la Mascota"
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                <input ref={this.fechaRef} type="date" className="form-control" />
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-8 col-lg-4">
                <input ref={this.horaRef} type="time" className="form-control" />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Sintomas
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea ref={this.sintomasRef} className="form-control" />
              </div>
            </div>
            <div className="form-group row justify-content-end">
              <div className="col-sm-3">
                <button type="submit" className="btn btn-success w-100">
                  Agregar
                </button>
              </div>
            </div>
          </form>
        {existeError ? <div className="alert alert-danger text-center">Todos los campos son obligatorios</div> : ''}
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  citas: state.citas.citas,
  error: state.error.error
})

export default connect(mapStateToProps, {agregarCita, validarFormulario, mostrarError}) (AgregarCita);
