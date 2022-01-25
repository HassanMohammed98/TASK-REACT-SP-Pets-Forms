import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import petStore from "../../petStore";

const PetCreateModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dataEntered, setDataEntered] = useState({
    name: "",
    type: "",
    image: "",
  });
  const handleClose = () => setIsOpen(false);
  const handleShow = () => setIsOpen(true);
  const handleChange = (event) => {
    setDataEntered({ ...dataEntered, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleClose();
    petStore.handleAddPet(dataEntered);
    setDataEntered({
      name: "",
      type: "",
      image: "",
    });
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Pet to the Store
      </Button>

      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Pet</Modal.Title>
        </Modal.Header>
        {/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> */}
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Enter Pet Name"
          />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Type</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="type"
            type="text"
            placeholder="Enter Pet Type"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="image"
            type="text"
            placeholder="Enter Pet Image"
          />
        </Form.Group>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PetCreateModal;
