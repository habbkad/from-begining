import React, { useState } from "react";
import ModalForm from "../modalForm/ModalForm";
import { Modal } from "react-bootstrap";

function Studentcontent({ item }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <tr>
      <td>0</td>
      <td>{item.name}</td>
      <td>{item.gen}</td>
      <td>
        <button onClick={handleShow}>Edit</button>
        <button>Delete</button>
      </td>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalForm data={item} />
        </Modal.Body>
      </Modal>
    </tr>
  );
}

export default Studentcontent;
