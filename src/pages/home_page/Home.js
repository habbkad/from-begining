import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
// import "./pages/home_page/Home.css";
import { useSelector } from "react-redux";

function Home() {
  const student = useSelector((state) => state.student);

  return (
    <div>
      <Container>
        <Row>
          {student.students.map((item) => {
            return (
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {item.gen}
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
