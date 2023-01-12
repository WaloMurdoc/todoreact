import { React, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import '../stylesheets/formulario.css'

function Formulario(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    // e.target.value nos permite extraer el valor del texto que el usuario ingresó en el input
    setInput(e.target.value);
  };
    
  const manejarEnvio = e => {
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    props.onSubmit(tareaNueva);
  };

  return (
  <form 
    className="tarea-formulario"
    onSubmit={manejarEnvio} >
    <input 
      className="tarea-input"
      type="text"
      placeholder="Escribe una tarea" 
      name="texto"
      onChange={manejarCambio} />
    <button className="tarea-boton">Agregar Tarea</button>
  </form>);
}

export default Formulario;
