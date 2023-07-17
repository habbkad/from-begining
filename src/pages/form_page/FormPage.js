import React, { useState } from "react";
import "./Form.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addStudent } from "../../redux/studentSlice";

function FormPage() {
  const [name, setName] = useState("");
  const [gen, setGen] = useState(0);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const student = {
      // name: name,
      // gen:gen or
      name,
      gen,
    };
    dispatch(addStudent(student));
    // console.log(student);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="name"
                  value={name}
                  placeholder="Enter name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="gen"
                  value={gen}
                  onChange={(e) => {
                    setGen(e.target.value);
                  }}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FormPage;
