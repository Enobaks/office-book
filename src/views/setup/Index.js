import React, { useState } from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./setup.css";
import "../dashboard/DashProfile/profile.css";

const Setup = () => {
  const [image, setImage] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);

  let history = useHistory();

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
        setIsUploaded(true);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    history.push('/app/dashboard/default');
  }

  return (
    <div>
      <Row className="set-cont d-flex">
        <Col md={9} className="set">
          <h3 className="mb-5">Kindly fill out the form below</h3>
          <Row>
            <Col md={6}>
              <form>
                <div className="details">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" className="w-100 mb-3" />
                </div>
                <div className="details">
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" className="w-100 mb-3" />
                </div>
                <div className="details">
                  <label htmlFor="phone">Phone No</label>
                  <input type="text" name="phone" className="w-100 mb-3" />
                </div>
                <div className="details">
                  <label htmlFor="website">Website</label>
                  <input type="text" name="website" className="w-100 mb-3" />
                </div>
                <div className="details">
                  <label htmlFor="address">Address</label>
                  <input type="text" name="address" className="w-100 mb-3" />
                </div>
                <div className="details">
                  <label htmlFor="city">City</label>
                  <input type="text" name="city" className="w-100 mb-3" />
                </div>
                <div className="details">
                  <label htmlFor="zipcode">Zipcode</label>
                  <input type="text" name="zipcode" className="w-100 mb-3" />
                </div>
                <div className="details">
                  <label htmlFor="country">Country</label>
                  <input type="text" name="country" className="w-100 mb-3" />
                </div>
              </form>
            </Col>
            <Col md={6}>
              <div className="logo">
                <div className="upload-wrap">
                  {!isUploaded ? (
                    <div>
                      <label htmlFor="img-upload">Upload company logo</label>
                      <input
                        type="file"
                        id="img-upload"
                        accept=".jpg,.jpeg,.png"
                        onChange={handleFileChange}
                      />
                    </div>
                  ) : (
                    <img
                      id="uploaded-image"
                      src={image}
                      alt="uploaded-img"
                      onClick={() => {
                        setIsUploaded(false);
                        setImage(null);
                      }}
                    />
                  )}
                </div>
              </div>
            </Col>
          </Row>
          <Button variant="primary" onClick={handleSubmit}>Submit</Button>
        </Col>
      </Row>

      {/* <Modal
        show={show}
         onHide={() => setShow(false)}
        size="lg"
         aria-labelledby="contained-modal-title-vcenter"
        centered
        closeButton
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h3>Kindly fill out the following details below</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="details">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              name="name"
              className="w-50 ml-2 mb-5"
            />
          </div>
          <div className="details">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              placeholder="Enter full name"
              name="name"
              className="w-50 ml-2 mb-5"
            />
          </div>
        </Modal.Body>
        The modal footer
        <Modal.Footer>
          <Button onClick={handleClose}>Continue</Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
};

export default Setup;
