import { Form, Button } from "react-bootstrap";
import "./Register.css";

const Register = () => {
  return (
    <div className="register__container">
      <h4 className="register__title ms-4">Registro</h4>
      <Form.Group className="mt-6">
        <div className="d-flex m-4">
          <Form.Label>Tipo de movimiento</Form.Label>
          <Form.Select disabled>
            <option>Ingreso</option>
            <option>Ingreso</option>
          </Form.Select>
        </div>
        <div className="d-flex m-4">
          <Form.Label>Nombre</Form.Label>
          <Form.Control className="ms-2" placeholder="" disabled />
        </div>
        <div className="d-flex m-4">
          <Form.Label>Cantidad</Form.Label>
          <Form.Control className="ms-2" placeholder="" disabled />
        </div>
        <div className="m-4">
          <Button className="ms-3" variant="danger">
            Cancelar
          </Button>
          <Button className="ms-3" variant="success">
            Agregar movimiento
          </Button>
        </div>
      </Form.Group>
    </div>
  );
};

export { Register };
