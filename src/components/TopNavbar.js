import { Navbar, Container, Form } from "react-bootstrap";
import { FcMoneyTransfer } from "react-icons/fc";

const TopNavbar = ({ saldoInicial, saldoFinal }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <FcMoneyTransfer />
          MoneyApp
        </Navbar.Brand>
        <Form className="d-flex">
          <Form.Label>Saldo Inicial</Form.Label>
          <Form.Control
            type="search"
            placeholder={saldoInicial}
            className="me-2"
            aria-label="Search"
          />
          <Form.Label>Saldo Final</Form.Label>
          <Form.Control
            type="search"
            placeholder={saldoFinal}
            className="me-2"
            aria-label="Search"
          />
        </Form>
      </Container>
    </Navbar>
  );
};

export { TopNavbar };
