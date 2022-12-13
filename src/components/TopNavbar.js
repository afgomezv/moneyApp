import { Navbar, Container, Form } from "react-bootstrap";
import { FcMoneyTransfer } from "react-icons/fc";

const TopNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <FcMoneyTransfer />
          MoneyApp
        </Navbar.Brand>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Saldo Inicial"
            className="me-2"
            aria-label="Search"
          />
          <Form.Control
            type="search"
            placeholder="Saldo Final"
            className="me-2"
            aria-label="Search"
          />
        </Form>
      </Container>
    </Navbar>
  );
};

export { TopNavbar };
