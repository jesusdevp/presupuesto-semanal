import React from "react";
import Gasto from "./Gasto";
import PropTypes from "prop-types";

const Listado = ({ gastos, restante, setGastos, setRestante }) => {
  const eliminarGasto = (gastoBorrar) => {
    // Eliminar el gasto
    const gastoEliminado = gastos.filter(
      (gasto) => gasto.id !== gastoBorrar.id
    );
    setGastos(gastoEliminado);

    // Actualizar el restante
    const actualizarRestante = restante + gastoBorrar.cantidad;
    setRestante(actualizarRestante);
  };

  return (
    <div className="gastos-realizados">
      <h2>Listado</h2>
      {gastos.map((gasto) => (
        <Gasto key={gasto.id} gasto={gasto} eliminarGasto={eliminarGasto} />
      ))}
    </div>
  );
};

Listado.propTypes = {
  gastos: PropTypes.array.isRequired,
};

export default Listado;
