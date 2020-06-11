import React, { Fragment, useState } from "react";
import Error from "./Error";

const Pregunta = ({ setPresupuesto, setRestante }) => {
  //State
  const [cantidad, setCantidad] = useState(0);
  //State error
  const [error, setError] = useState(false);

  //Lee el presupuesto
  const handleChange = (e) => {
    setCantidad(parseInt(e.target.value, 10));
  };

  //Submit para definir presupuesto
  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }

    setError(false);
    setPresupuesto(cantidad);
    setRestante(cantidad);
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={handleChange}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </Fragment>
  );
};

export default Pregunta;
