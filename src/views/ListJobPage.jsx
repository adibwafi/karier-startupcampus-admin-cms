import { Container, Row, Col, Button } from "react-bootstrap";
import Tables from "../components/Tables";
import { useNavigate } from "react-router-dom";

function ListJobPage() {
  const navigate = useNavigate();
  return (
    <>
      <Container style={{ transform: "scale(95%)" }}>
        <Row className="mt-5">
          <h1 className="d-flex justify-content-start" style={{color: "white" }}>Job List</h1>
          <h5 style={{color: "white" }}>Manage your job vacancy here</h5>
        </Row>
        <Row className="mb-1 mt-3">
          
          <Col className="col-12 d-flex justify-content-end">
            <Button
              onClick={() => navigate(`/admin/add-job`)}
              className="btn-light btn"
              style={{ color: "#eca93b", fontWeight: "bold" }}
            >
              {" "}
              + Add Job
            </Button>
          </Col>
        </Row>
        <Row>
          <Tables
            status={"job"}
            head={[
              "No",
              "Title",
              "Description",
              "Requirement",
              "Job Type",
              "Active",
              "Action",
            ]}
          />
        </Row>
      </Container>
    </>
  );
}

export default ListJobPage;
