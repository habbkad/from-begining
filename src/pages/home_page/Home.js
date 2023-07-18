import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
// import "./pages/home_page/Home.css";
import { useSelector } from "react-redux";
import ModalForm from "../../components/modalForm/ModalForm";
import Studentcontent from "../../components/StudentContent/Studentcontent";

function Home() {
  const student = useSelector((state) => state.student);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Table striped bordered hover variant="dark">
              {" "}
              <thead>
                <tr>
                  <th>#</th>
                  <th> Name</th>
                  <th>Gen</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {student.students.map((item, index) => {
                  return <Studentcontent item={item} key={item.id} />;
                })}
              </tbody>
            </Table>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
