import React, { useState } from "react";
import PropTypes from "prop-types";
import Error from "./Error";
import shortid from "shortid";

const Formulario = ({ setGasto, setCrearGasto }) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [error, setError] = useState(false);

  //Agregar gasto

  const agregarGasto = (e) => {
    e.preventDefault();

    //validar
    if (cantidad < 1 || isNaN(parseInt(cantidad)) || nombre.trim() === "") {
      setError(true);
      return;
    }

    setError(false);

    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    };

    //pasar gasto al componente principal
    setGasto(gasto);
    setCrearGasto(true);

    //resetear el form
    setNombre("");
    setCantidad("");
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aqui</h2>
      {error ? (
        <Error mensaje="Ambos campos son obligatorios o Presupuesto Incorrecto" />
      ) : null}
      <div className="campo">
        <label>Nombre gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Comida"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width "
        value="Agregar Gasto"
      />
    </form>
  );
};

Formulario.propTypes = {
  setGasto: PropTypes.func.isRequired,
  setCrearGasto: PropTypes.func.isRequired,
};

export default Formulario;
