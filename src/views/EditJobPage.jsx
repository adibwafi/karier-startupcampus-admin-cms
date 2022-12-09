import {
  Container,
  Form,
  Button,
  Row,
  Col,
  FloatingLabel,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jobDetailById, updateJob } from "../store/action/job";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

function EditJobPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { jobDetail } = useSelector((state) => {
    return state.jobReducer;
  });

  useEffect(() => {
    setForm({
      title: jobDetail.title,
      description: jobDetail.description,
      requirement: jobDetail.requirement,
      jobType: jobDetail.jobType,
    });
  }, [jobDetail]);

  const [form, setForm] = useState({
    name: jobDetail.name,
    description: jobDetail.description,
    requirement: jobDetail.requirement,
    jobType: jobDetail.jobType,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    let newJob = {
      ...form,
    };
    newJob[name] = value;
    setForm(newJob);
  };

  const handleEdit = (event) => {
    event.preventDefault();
    dispatch(updateJob(form, jobDetail._id))
        navigate(`/admin/list-job`);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Edit item success!",
          showConfirmButton: false,
          timer: 1500,
        });
  };

  return (
    <Container>
      <h1 className="mb-1 mt-5 text-center" style={{ color: "white" }}>
        Edit Job
      </h1>

      <Container
        className="container h-50 w-70 p-5 rounded-3"
        style={{ backgroundColor: "white", transform: "scale(90%)" }}
      >
        <Row>
          <Form onSubmit={handleEdit}>
            <Row className="px-3 w-75 mx-auto">
              <Form.Group className="mb-3 px-3">
                <FloatingLabel
                  className="text-black d-flex justify-content-start mt-3 ml-5"
                  controlId="floatingTextarea2"
                  label="Title"
                >
                  <Form.Control
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter job title"
                  />
                </FloatingLabel>
                <FloatingLabel
                  className="text-black d-flex justify-content-start mt-3 ml-5"
                  controlId="floatingTextarea2"
                  label="Description"
                >
                  <Form.Control
                    name="description"
                    as="textarea"
                    style={{ height: "180px" }}
                    value={form.description}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter job description"
                  />
                </FloatingLabel>
                <FloatingLabel
                  className="text-black d-flex justify-content-start mt-3 ml-5"
                  controlId="floatingTextarea2"
                  label="Requirement"
                >
                  <Form.Control
                    name="requirement"
                    as="textarea"
                    style={{ height: "180px" }}
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
                    style={{
                      backgroundColor: "#eca93b",
                      color: "black",
                      width: "100px",
                    }}
                  >
                    Submit
                  </Button>
                </div>
              </Form.Group>
            </Row>
          </Form>
        </Row>
      </Container>
    </Container>
  );
}

export default EditJobPage;
