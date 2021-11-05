import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Edit3 } from "react-feather";
import "./profile.css";

const DashProfile = () => {
  const [edit, setEdit] = useState(true);
  const handleEdit = () => {
    setEdit(!edit);
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
          <div className="logo">Upload Image</div>
          {edit ? (
            <div className="edit-wrap" onClick={handleEdit}>
              <p>Edit</p>
              <Edit3 />
            </div>
          ) : (
            <button className="btn btn-success save" onClick={handleEdit}>Save</button>
          )}
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default DashProfile;