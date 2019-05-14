import React from "react";
import Header from "./components/Header";
import AgregarCita from "./components/AgregarCita";
import ListaCitas from './components/ListaCitas';

class App extends React.Component {

  state = {
    citas: []
  }

  //cuando se carga el componente
  componentDidMount() {
    const citasLS = localStorage.getItem('citas');
    if(citasLS) {
      this.setState({
        citas: JSON.parse(citasLS)
      })
    }
  }


  //cuando algo cambia y el state se ve afectado
  componentDidUpdate(){
    localStorage.setItem(
      'citas', 
      JSON.stringify(this.state.citas)
    )
  }


  crearCita = (nuevaCita) => {
  //  console.log(cita);
   const citas = [...this.state.citas, nuevaCita]
   console.log(citas);

   this.setState({
     citas
   });
  }

  borrarCita = id => {
    console.log(id);

    const citasActuales = [...this.state.citas];

    // borrar el elemento del state
    const citas = citasActuales.filter(cita => cita.id !== id);
    
    // Actualizar el state
    this.setState({
      citas
    })
    
  }

  render() {
    return (
      <div className="container">
        <Header titulo={"Administrador de Pacientes"} />
        <div className="row">
          <div className="col-md-6">
            <AgregarCita crearCita={this.crearCita} />
          </div>
          <div className="col-md-6">
            <ListaCitas 
            citas={this.state.citas}
            borrarCita={this.borrarCita}
            />
          </div>

        </div>
      </div>
    );
  }
}

export default App;
