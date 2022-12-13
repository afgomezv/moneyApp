import { ListGroup, Form } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { ImPencil } from "react-icons/im";
import "./ListMove.css";

const ListMove = () => {
  return (
    <div className="listMove__container">
      <h4>Lista de movimiento</h4>
      <ListGroup>
        <div>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2 w-50"
          />
        </div>
        <ListGroup.Item>
          <MdDelete className="listMove__delete" />
          <ImPencil className="listMove__edit" />
          Salario Freelance
        </ListGroup.Item>
        <ListGroup.Item>
          <MdDelete className="listMove__delete" />
          <ImPencil className="listMove__edit" />
          Transporte
        </ListGroup.Item>
        <ListGroup.Item>
          <MdDelete className="listMove__delete" />
          <ImPencil className="listMove__edit" />
          Almuerzo
        </ListGroup.Item>
        <ListGroup.Item>
          <MdDelete className="listMove__delete" />
          <ImPencil className="listMove__edit" />
          Regalo
        </ListGroup.Item>
        <ListGroup.Item>
          <MdDelete className="listMove__delete" />
          <ImPencil className="listMove__edit" />
          Almuerzo
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export { ListMove };
