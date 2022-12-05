import { Button, Form, Row, Container, Col, FloatingLabel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";
import { BASE_URL } from "../store/actionTypes/actionTypes";

function RegisterUser() {
  const navigate = useNavigate();
  const [input, setInputRegister] = useState({
    name: "",
    password: "",
    email: "",
    phoneNumber: "",
  });

  // console.log(input, "<< input formnya");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputRegister({
      ...input,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(BASE_URL + `/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      let data = await response.json();
      console.log(data);
      if (!response.ok) throw data.message;
      setInputRegister({
        fullName: "",
        email: "",
        password: "",
        phoneNumber: "",
      });
      navigate("/login");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Register new admin success!",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });
    } catch (err) {
      // console.log(err, "<<<< error di register");
      Swal.fire({
        icon: "error",
        title: "Oops, something's wrong!",
        text: err,
      });
    }
  };
  return (
    <Container
      fluid
      className="d-flex justify-content-center mt-5 h-100"
      style={{
        backgroundColor: "#0654d4",
      }}
    >
      <Container
        fluid
        className="justify-content-center align-items-center mt-5 mb-3 border rounded shadow-lg bg-white rounded"
        style={{
          transform: "scale(80%)",
          borderColor: "black",
        }}
      >
        <Row className="d-flex justify-content-center align-items-center mt-5 mb-5">
          <Col className="col-6 d-flex justify-content-center align-items-center">
            <img
              className="d-flex justify-content-center align-items-center w-100 h-100 p-5"
              src={process.env.PUBLIC_URL + "/assets/jargon.png"}
            ></img>
          </Col>
          <Col className="col-6 d-flex justify-content-center align-items-center mb-5">
            <Form onSubmit={handleOnSubmit} className="w-75 m-auto">
              <Row className="d-flex justify-content-center align-items-center mb-3">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/logos1.png"
                  }
                  style={{ width: "40%" }}
                  alt="Logo"
                  className="d-flex align-items-center justify-content-center"
                />
              </Row>
              <Row>
                <Form.Group ontrolId="formGridUsername">
                <FloatingLabel className="text-black d-flex justify-content-start mt-3 ml-5" controlId="floatingTextarea2" label="Name">
                  <Form.Control
                    name="name"
                    value={input.name}
                    onChange={handleOnChange}
                    type="text"
                    placeholder="Name"
                    className="mb-3"
                  />
                  </FloatingLabel>
                
                  <FloatingLabel className="text-black d-flex justify-content-start mt-3 ml-5" controlId="floatingTextarea2" label="Email">
                  <Form.Control
                    name="email"
                    value={input.email}
                    onChange={handleOnChange}
                    type="email"
                    placeholder="Email"
                    className="mb-3"
                  />
                    </FloatingLabel>
                
                
                    <FloatingLabel className="text-black d-flex justify-content-start mt-3 ml-5" controlId="floatingTextarea2" label="Password">
                  <Form.Control
                    name="password"
                    value={input.password}
                    onChange={handleOnChange}
                    type="password"
                    placeholder="Password"
                    className="mb-3"
                  />
                      </FloatingLabel>
                
                
                      <FloatingLabel className="text-black d-flex justify-content-start mt-3 ml-5" controlId="floatingTextarea2" label="Phone Number">
                  <Form.Control
                    name="phoneNumber"
                    value={input.phoneNumber}
                    onChange={handleOnChange}
                    type="text"
                    placeholder="Phone number"
                    className="mb-3"
                  />
                        </FloatingLabel>
                </Form.Group>
              </Row>
              <Col className="d-flex justify-content-center align-items-center">
                <Button
                  variant="warning"
                  type="submit"
                  className="mt-3 border-0 btn btn-lg w-50"
                >
                  Register
                </Button>
              </Col>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default RegisterUser;
