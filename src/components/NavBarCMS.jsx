import { Navbar, Container, Col, Nav, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import { BsPersonSquare } from "react-icons/bs";
export default function NavBar() {
  const navigate = useNavigate();
  return (
    <Navbar bg="white" expand="lg" className="fixed-top">
      <Container>
        <Navbar.Brand>
          <img
            src={
              process.env.PUBLIC_URL + "/assets/logo_savvie_transparant-01.png"
            }
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Savvie Logo"
            onClick={() => navigate(`/`)}
          />
        </Navbar.Brand>
      </Container>
      <Navbar.Toggle />
      <Col className="col-2 p-3">
        <Nav className="d-flex align-items-center justify-content-end">
          <Row className="d-flex justify-content-between">
            <Col>
              {" "}
              <FaBell style={{ color: "#77AA9C", size: "25rem" }} />
            </Col>
            <Col>
              <BsPersonSquare style={{ color: "#77AA9C", size: "25rem" }} />
            </Col>
          </Row>
        </Nav>
      </Col>
    </Navbar>
  );
}
