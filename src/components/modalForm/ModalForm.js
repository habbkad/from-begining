import React, { useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { editStudent } from "../../redux/studentSlice";

function ModalForm(props) {
  const data = props.data;
  const [name, setName] = useState(data.name);
  const [gen, setGen] = useState(data.gen);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const student = {
      name: name,
      gen: gen,
      id: data.id,
    };

    dispatch(editStudent(student));
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

export default ModalForm;
