import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import "./Register.css";

const Register = ({ saldo, agregaMovimiento }) => {
  const [values, setValues] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setValues({ ...values, [name]: value });
  };

  const registro = (event) => {
    event.preventDefault();
    console.log(values);
    if (values.movimiento === "gasto") {
      const validarSaldo = validacionSaldo(parseInt(values.cantidad));
      if (validarSaldo)
        agregaMovimiento(values.movimiento, parseInt(values.cantidad));
    } else {
      agregaMovimiento(values.movimiento, parseInt(values.cantidad));
    }
  };

  const validacionSaldo = (costoMovimiento) => {
    let validation = true;
    if (costoMovimiento > saldo) {
      alert("No cuenta con saldo suficiente para realizar este moviento");
      validation = false;
    }
    return validation;
  };

  return (
    <div className="register__container">
      <h4 className="register__title ms-4">Registro</h4>
      <Form onSubmit={registro}>
        <Form.Group className="mt-6" controlId="formulario">
          <div className="d-flex m-4">
            <Form.Label>Tipo de movimiento</Form.Label>
            <Form.Select name="movimiento" onChange={handleChange}>
              <option value="ingreso">Ingreso</option>
              <option value="gasto">Gasto</option>
            </Form.Select>
          </div>
          <div className="d-flex m-4">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              className="ms-2"
              placeholder=""
              name="nombre"
              onChange={handleChange}
              required
            />
          </div>
          <div className="d-flex m-4">
            <Form.Label>Cantidad</Form.Label>
            <Form.Control
              className="ms-2"
              type="number"
              min="1"
              pattern="^[0-9]+"
              placeholder=""
              name="cantidad"
              required
              onChange={handleChange}
            />
          </div>
          <div className="m-4">
            <Button className="ms-3" variant="danger">
              Cancelar
            </Button>
            <Button className="ms-3" variant="success" type="submit">
              Agregar movimiento
            </Button>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

export { Register };
