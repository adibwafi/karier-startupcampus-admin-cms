import { Container, Form, Button, Row, Col, FloatingLabel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addJob } from "../store/action/job";
import Swal from "sweetalert2";

function AddJobPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    title: "",
    description: "",
    requirement: "",
    jobType: "",
  });

  // console.log(form, "inputan form");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(form, "<<<<<<<");
    dispatch(addJob(form)).then(() => {
      navigate("/admin/list-job");
       Swal.fire({
         position: "center",
         icon: "success",
         title: "Adding new job success!",
         showConfirmButton: false,
         timer: 1500,
       });
    });
  };

  return (
    <Container>
      <h1 className="mb-1 mt-5 text-center" style={{color: "white" }}>Add Job</h1>

      <Container
        className="container h-50 w-70 p-5 rounded-3"
        style={{ backgroundColor: "white", transform: "scale(90%)" }}
      >
        <Row>
          <Col className="bg-white">
            <Form onSubmit={handleSubmit}>
              <Row className="px-3 w-75 mx-auto">
                <Row>
                  <h1 className="d-flex justify-content-center">
                    Job Information
                  </h1>
                </Row>
                <Form.Group className="mb-3 px-3">
                <FloatingLabel className="text-black d-flex justify-content-start mt-3 ml-5" controlId="floatingTextarea2" label="Title">
                    <Form.Control
                      name="title"
                      value={form.title}
                      onChange={handleChange}
                      type="text"
                      placeholder="Enter job title"
                    />
                </FloatingLabel>
                    <FloatingLabel className="text-black d-flex justify-content-start mt-3 ml-5" controlId="floatingTextarea2" label="Description">
                    <Form.Control
                      as="textarea"
                      name="description"
                      style={{ height: '100px' }}
                      value={form.description}
                      onChange={handleChange}
                      type="text"
                      placeholder="Enter job description"
                    />
                    </FloatingLabel>
                    <FloatingLabel className="text-black d-flex justify-content-start mt-3 ml-5" controlId="floatingTextarea2" label="Requirement">
                    <Form.Control
                      as="textarea"
                      name="requirement"
                      style={{ height: '100px' }}
                      value={form.requirement}
                      onChange={handleChange}
                      type="text"
                      placeholder="Enter job requirement"
                    />
                    </FloatingLabel>
                    <Form.Label className="text-black d-flex justify-content-start mt-3 ml-5">
                      Job Type
                    </Form.Label>
                    <Form.Select
                      name="jobType"
                      value={form.jobType}
                      onChange={handleChange}
                    >
                      <option selected>Select Job type</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Freelance">Freelance</option>
                    </Form.Select>
                <div className="d-flex justify-content-center w-100">
              <Button
                variant="primary"
                type="submit"
                className="my-4 border-0 w-50 mx-auto"
                style={{ backgroundColor: "#eca93b", color: "black", width: "100px" }}
              >
                Submit
              </Button>
              </div>
                </Form.Group>
              </Row>

            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );

}

export default AddJobPage;
