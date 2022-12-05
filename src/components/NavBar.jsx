import { Navbar, Container, Col, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <Navbar bg="light" className="fixed-top">
      <Container gap={3}>
        <Navbar.Brand>
          <img
            src={
              process.env.PUBLIC_URL + "/assets/logos1.png"
            }
            width="101"
            height="33"
            className="d-inline-block align-top ms-3"
            alt="StartupCampus Logo"
            onClick={() => navigate(`/`)}
          />
        </Navbar.Brand>
      </Container>
      <Navbar.Toggle />
      <Col className="col-2">
        <Nav className="me-4 d-flex justify-content-end ">
        <Button
        onClick={() => navigate(`/login`)}
        variant="primary"
                className="my-2 btn btn-lg"
              >
                Login
              </Button>
        </Nav>
      </Col>
    </Navbar>
  );
}
