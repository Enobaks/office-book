import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
// import { useHistory } from "react-router-dom";
import "./setup.css";
import "../dashboard/DashProfile/profile.css";
import logo from "../../assets/images/custom-logo.png";

const Setup = () => {
  const [image, setImage] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);

  const currentYear = new Date().getFullYear();
  console.log(currentYear);

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

  return (
    <div>
      <Row className="set-cont d-flex">
        <Col md={12} className="d-flex align-items-center setup-logo">
          <img src={logo} alt="Office Book Logo" />
          <h3>Office Book</h3>
        </Col>
        <Col md={9} className="set">
          <h3 className="mb-1">Setup Form</h3>
          <p className="setup-details">
            Kindly fill out the form below to start using office-book
            immediately
          </p>
          <Row>
            <Col md={8}>
              <form>
                <div className="details mb-3">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" className="w-100" />
                </div>
                <div className="details mb-3">
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" className="w-100" />
                </div>
                <div className="details mb-3">
                  <label htmlFor="phone">Phone No</label>
                  <input type="text" name="phone" className="w-100" />
                </div>
                <div className="details mb-3">
                  <label htmlFor="website">Website</label>
                  <input type="text" name="website" className="w-100" />
                </div>
                <div className="details mb-3">
                  <label htmlFor="address">Address</label>
                  <input type="text" name="address" className="w-100" />
                </div>
                <div className="details mb-3">
                  <label htmlFor="city">City</label>
                  <input type="text" name="city" className="w-100" />
                </div>
                <div className="details mb-3">
                  <label htmlFor="zipcode">Zipcode</label>
                  <input type="text" name="zipcode" className="w-100" />
                </div>
                <div className="details mb-3">
                  <label htmlFor="country">Country</label>
                  <input type="text" name="country" className="w-100" />
                </div>
              </form>
            </Col>
            <Col md={4}>
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
          <Button className="setup-btn">Submit</Button>
        </Col>
        <Col md={12} className="d-flex justify-content-center footer my-3">
          {currentYear} Office Book, Inc. All rights reserved
        </Col>
      </Row>
    </div>
  );
};

export default Setup;
