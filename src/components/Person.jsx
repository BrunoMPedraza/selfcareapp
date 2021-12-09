import React from "react";

const Person = ({imagenCara, imagenCompleta  , nombre, fumador }) => {
  // tengo que recibir por prop img, nombre, y si consume maconia

  function validarTexto(titulo) {
    if (!titulo) {
      return "sin nombre";
    } else {
      return titulo;
    }
  }

  return (
    <div className="rectanguloParaDudu">
      <h2>{validarTexto(nombre)}</h2>
      <img className='cuerpoCompleto' src={imagenCompleta} alt="" />
      <img className="cara" src={imagenCara} alt="" />
    </div>
  );
};

export default Person;
