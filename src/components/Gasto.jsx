import React from "react";
import PropTypes from "prop-types";

const Gasto = ({ gasto, eliminarGasto }) => (
  <li className="gastos">
    <p>
      {gasto.nombre}
      <span className="gasto">$ {gasto.cantidad} </span>
    </p>
    <button onClick={() => eliminarGasto(gasto)} className="alert-danger">
      Eliminar Gasto
    </button>
  </li>
);

Gasto.propTypes = {
  gasto: PropTypes.object.isRequired,
  eliminarGasto: PropTypes.func.isRequired,
};

export default Gasto;
