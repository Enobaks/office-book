import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
// import { Edit3 } from "react-feather";
import "./profile.css";

const DashProfile = () => {
  const [edit, setEdit] = useState(true);
  const [image, setImage] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
    setIsUploaded(false);
    setImage(null);
  };

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
    <React.Fragment>
      <Row>
        <Col md={6} xl={4}>
          <div className="company mt-3">
            <input
              name="companyName"
              type="text"
              disabled={edit}
              placeholder="Company Name"
              className="w-100 company-input mb-3"
            />
          </div>
          <div className="company mb-3">
            <input
              name="companyEmail"
              type="text"
              placeholder="Email address"
              disabled={edit}
              className="w-100 company-input"
            />
          </div>
          <div className="company mb-3">
            <input
              name="companyNo"
              type="text"
              placeholder="Phone Number"
              disabled={edit}
              className="w-100 company-input"
            />
          </div>
          <div className="company mb-3">
            <input
              name="companyWebsite"
              type="text"
              placeholder="Website"
              disabled={edit}
              className="w-100 company-input"
            />
          </div>
          <div className="company mb-3">
            <input
              name="companyAddress"
              type="text"
              placeholder="Address"
              disabled={edit}
              className="w-100 company-input"
            />
          </div>
          <div className="company mb-3">
            <input
              name="companyCity"
              type="text"
              placeholder="City"
              disabled={edit}
              className="w-100 company-input"
            />
          </div>
          <div className="company mb-3">
            <input
              name="companyZipcode"
              type="text"
              placeholder="Zipcode"
              disabled={edit}
              className="w-100 company-input"
            />
          </div>
          <div className="company mb-3">
            <input
              name="companyCountry"
              type="text"
              placeholder="Country"
              disabled={edit}
              className="w-100 company-input"
            />
          </div>
        </Col>
        <Col md={6} xl={4} className="profile-cont">
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
                  draggable={false}
                  alt="uploaded-img"
                  
                />
              )}
            </div>
          </div>
          {edit ? (
            <div className="edit-wrap" onClick={handleEdit}>
              <p>Edit</p>
              {/* <Edit3 /> */}
            </div>
          ) : (
            <button className="btn btn-success save" onClick={handleEdit}>
              Save
            </button>
          )}
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default DashProfile;
