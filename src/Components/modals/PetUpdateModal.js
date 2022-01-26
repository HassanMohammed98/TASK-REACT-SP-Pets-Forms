import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import petStore from "../../petStore";

const PetUpdateModal = ({ id, name, type, image }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [updatedPet, setUpdatedPet] = useState({
    newName: name,
    newType: type,
    newImage: image,
  });
  const handleClose = () => setIsUpdate(false);
  const handleChange = (event) => {
    setUpdatedPet({ ...updatedPet, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleClose();
    console.log(id);
    console.log(updatedPet);

    petStore.handleUpdatePet(updatedPet, id);
    // setUpdatedPet({
    //   newName: name,
    //   newType: type,
    //   newImage: image,
    // });
  };
  return (
    <div className="m-2">
      <button
        type="button"
        className="btn btn-info"
        onClick={() => setIsUpdate(!isUpdate)}
      >
        Update Pet Info
      </button>

      {isUpdate && (
        <div className="m-4">
          <h5 className="m-2">
            To update any of the pet's info(s), kindly fill the approp. box(es)
            below.
          </h5>

          <Form.Group className="mb-3">
            <Form.Label>Enter the Pet's New Name</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="newName"
              type="text"
              defaultValue={name}
              placeholder="Enter New Name"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Modify the Pet's Type</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="newType"
              type="text"
              defaultValue={type}
              placeholder="Enter Pet Type"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Upload the Pet's latest picture</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="newImage"
              type="text"
              defaultValue={image}
              placeholder="Upload latest pic"
            />
          </Form.Group>
          <div className="closingUpdateButton">
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PetUpdateModal;
