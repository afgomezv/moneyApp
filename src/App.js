import "./App.css";
import { ListMove } from "./components/ListMove";
import { Register } from "./components/Register";
import { TopNavbar } from "./components/TopNavbar";
import { useState, useEffect } from "react";

const App = () => {
  const [saldoInicial, setsaldoInicial] = useState(10);
  const [saldoFinal, setsaldoFinal] = useState(saldoInicial);

  useEffect(() => {
    setsaldoInicial(10);
  }, []);

  const agregaMovimiento = (movimiento, saldo) => {
    // eslint-disable-next-line no-restricted-globals
    let aceptarMovimiento = confirm("Agregar movimiento");
    if (aceptarMovimiento === true) {
      movimiento === "gasto"
        ? setsaldoFinal(saldoFinal - saldo)
        : setsaldoFinal(saldoFinal + saldo);
    } else {
      alert("No aceptaste el movimiento");
    }
  };

  return (
    <div>
      <TopNavbar saldoInicial={saldoInicial} saldoFinal={saldoFinal} />
      <div className="d-flex">
        <Register saldo={saldoFinal} agregaMovimiento={agregaMovimiento} />
        <ListMove />
      </div>
    </div>
  );
};

export { App };
