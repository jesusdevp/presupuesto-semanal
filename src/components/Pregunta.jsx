import React, { Fragment, useState } from "react";

const Pregunta = () => {
  //State
  const [cantidad, setCantidad] = useState(0);
  //State error
  const [error, setError] = useState(false);

  //Lee el presupuesto
  const handleChange = (e) => {
    setCantidad(parseInt(e.target.value));
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
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
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
