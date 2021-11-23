import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  validate,
  setError,
  displayError,
  resetErrorObj,
} from "../extensions/invoice/validateInvoice";
import { Row, Col, Button } from "react-bootstrap";
// import { useHistory } from "react-router-dom";
import "./setup.css";
import "../dashboard/DashProfile/profile.css";
import logo from "../../assets/images/custom-logo.png";

const Setup = () => {
  const [image, setImage] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);

  let history = useHistory();
  const [form, setForm] = useState({
    company_info: {
      company_name: "",
      address: "",
      mail: "",
      phone: "",
      city: "",
      zip: "",
      country: "",
      website: "",
    },
  });
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

  const [errors, setErrors] = useState({
    company_nameErrors: "",
    addressErrors: "",
    mailErrors: "",
    phoneErrors: "",
    cityErrors: "",
    zipErrors: "",
    countryErrors: "",
    websiteErrors: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    resetErrorObj(errors, (v) => setErrors({ ...v }));
    const errorList = validate(form);
    if (errorList.length > 0) {
      setError(errorList, errors, (val) => setErrors({ ...val }));
      return;
    }
    // const logo = image ? image : "";
    // const formDatas = { ...form, logo };

    history.push("/app/dashboard/default");
  };

  return (
    <div className="set__up">
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
                  <input
                    type="text"
                    name="name"
                    value={form.company_info.company_name}
                    onChange={(e) => {
                      setForm({
                        ...form,
                        company_info: {
                          ...form.company_info,
                          company_name: e.target.value,
                        },
                      });
                    }}
                    className="w-100"
                  />
                  {errors.company_nameErrors &&
                    displayError(errors.company_nameErrors)}
                </div>
                <div className="details mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.company_info.mail}
                    onChange={(e) => {
                      setForm({
                        ...form,
                        company_info: {
                          ...form.company_info,
                          mail: e.target.value,
                        },
                      });
                    }}
                    className="w-100"
                  />
                  {errors.mailErrors && displayError(errors.mailErrors)}
                </div>
                <div className="details mb-3">
                  <label htmlFor="phone">Phone No</label>
                  <input
                    type="number"
                    name="phone"
                    value={form.company_info.phone}
                    onChange={(e) => {
                      setForm({
                        ...form,
                        company_info: {
                          ...form.company_info,
                          phone: e.target.value,
                        },
                      });
                    }}
                    className="w-100"
                  />
                  {errors.phoneErrors && displayError(errors.phoneErrors)}
                </div>
                <div className="details mb-3">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    name="website"
                    value={form.company_info.website}
                    onChange={(e) => {
                      setForm({
                        ...form,
                        company_info: {
                          ...form.company_info,
                          website: e.target.value,
                        },
                      });
                    }}
                    className="w-100"
                  />
                  {errors.websiteErrors && displayError(errors.websiteErrors)}
                </div>
                <div className="details mb-3">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={form.company_info.address}
                    onChange={(e) => {
                      setForm({
                        ...form,
                        company_info: {
                          ...form.company_info,
                          address: e.target.value,
                        },
                      });
                    }}
                    className="w-100"
                  />
                  {errors.addressErrors && displayError(errors.addressErrors)}
                </div>
                <div className="details mb-3">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    name="city"
                    value={form.company_info.city}
                    onChange={(e) => {
                      setForm({
                        ...form,
                        company_info: {
                          ...form.company_info,
                          city: e.target.value,
                        },
                      });
                    }}
                    className="w-100"
                  />
                  {errors.cityErrors && displayError(errors.cityErrors)}
                </div>
                <div className="details mb-3">
                  <label htmlFor="zipcode">Zipcode</label>
                  <input
                    type="number"
                    name="zipcode"
                    value={form.company_info.zip}
                    onChange={(e) => {
                      setForm({
                        ...form,
                        company_info: {
                          ...form.company_info,
                          zip: e.target.value,
                        },
                      });
                    }}
                    className="w-100"
                  />
                  {errors.zipErrors && displayError(errors.zipErrors)}
                </div>
                <div className="details mb-3">
                  <label htmlFor="country">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={form.company_info.country}
                    onChange={(e) => {
                      setForm({
                        ...form,
                        company_info: {
                          ...form.company_info,
                          country: e.target.value,
                        },
                      });
                    }}
                    className="w-100"
                  />
                  {errors.countryErrors && displayError(errors.countryErrors)}
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
          <Button variant="primary" className="mt-4" onClick={handleSubmit}>
            Submit
          </Button>
        </Col>
        <Col md={12} className="d-flex justify-content-center footer my-3">
          {currentYear} Office Book, Inc. All rights reserved
        </Col>
      </Row>
    </div>
  );
};

export default Setup;
