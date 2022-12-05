import { Container, Row, Col } from "react-bootstrap";
import CardActiveJob from "../components/CardActiveJob";
import CardApplication from "../components/CardApplication";



function Dashboard() {
  return (
    <>
      <Container style={{ transform: "scale(95%)",
     backgroundColor: "#0654d4" 
     }}>
        <Row className="mt-5">
          <h1 className="d-flex justify-content-start" style={{color: "white" }}>Dashboard</h1>
          <h5 className="d-flex justify-content-start" style={{color: "white" }}>
            Activities you need to monitor
          </h5>
        </Row>
        <Row className="mt-3">
          <Col className="p-2 col-3">
            <CardActiveJob />
          </Col>
          <Col className="p-2 col-3">
            <CardApplication />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
