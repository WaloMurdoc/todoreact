import React, { useState } from 'react';
import Formulario from './Formulario';
import Tarea from './Tarea';
import '../stylesheets/listadetareas.css'

function ListaDeTareas(){
  
  const [tareas, setTareas] = useState([]);

  const agregarTareas = tarea => {
    console.log(tarea);
    if(tarea.texto.trim()){
      tarea.texto = tarea.texto.trim();
      // La tarea por agregar se agrega al principio de las lista de tareas 
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if(tarea.id === id){
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (    
    // Fragmentos, solo se muestran para generar la estructura, mas no se generan cuando se arma el html
    <>
      <Formulario onSubmit={agregarTareas} />
      <div className='tareas-lista-contenedor'>
        {
          tareas.map((tarea) =>
            <Tarea 
              // Forma que tiene React de identificar un elemento en una lista
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto} 
              completada={tarea.completada} 
              eliminarTarea={eliminarTarea} 
              completarTarea={completarTarea} />
          )
        }
      </div>
    </>
  );
}

export default ListaDeTareas;