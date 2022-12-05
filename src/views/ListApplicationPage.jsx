import { Container, Row } from "react-bootstrap";
import Tables from "../components/Tables";

function ListApplicationPage() {
  return (
    <>
      <Container style={{ transform: "scale(95%)" }}>
        <Row className="mt-5">
          <h1 className="d-flex justify-content-start" style={{color: "white" }}>Application List</h1>
          <h5 style={{color: "white" }}>
          List of applications that you will process
          </h5>
        </Row>
        <Row className="mb-3"></Row>
        <Row>
          <Tables striped
            status={"application"}
            head={[
              "No",
              "Name",
              "Email",
              "Phone Number",
              "Job",
              "Resume",
            ]}
           />
        </Row>
      </Container>
    </>
  );
}

export default ListApplicationPage;
