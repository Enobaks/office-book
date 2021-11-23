import React, { useEffect, useState } from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./setup.css";
import "../dashboard/DashProfile/profile.css";
import {validate, setError, displayError, resetErrorObj} from '../extensions/invoice/validateInvoice'

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
    }
  })

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
    websiteErrors: ""
  })
  const handleSubmit = e => {
    e.preventDefault();
    resetErrorObj(errors, (v)=> setErrors({...v}))
    const errorList = validate(form)
    console.log(errorList)
    if(errorList.length > 0){
      setError(errorList, errors, (val)=>setErrors({...val}))
      return
    }
    const formDatas = {...form}
    console.log(formDatas)
    // console.log(image)
    // history.push('/app/dashboard/default');
  }

  return (
    <div className="set__up">
      <Row className="set-cont d-flex">
        <Col md={9} className="set">
          <h3 className="mb-5">Welcome, let's set up you account</h3>
          <Row>
            <Col md={6}>
              <form>
                <div className="details">
                  <label htmlFor="name">Company Name</label>
                  <input type="text" name="name"
                  value={form.company_info.company_name}
                  onChange={(e)=>{
                    setForm({...form, company_info:{
                      ...form.company_info, company_name: e.target.value
                    }})
                  }} 
                  className="w-100 mb-3" />
                  {errors.company_nameErrors &&
                displayError(errors.company_nameErrors)}
                </div>
                <div className="details">
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email"
                  value={form.company_info.mail}
                  onChange={(e)=>{
                    setForm({...form, company_info:{
                      ...form.company_info, mail: e.target.value
                    }})
                  }}
                     className="w-100 mb-3" />
                     {errors.mailErrors &&
                displayError(errors.mailErrors)}
                </div>
                <div className="details">
                  <label htmlFor="phone">Phone No</label>
                  <input type="text" name="phone"
                  value={form.company_info.phone}
                  onChange={(e)=>{
                    setForm({...form, company_info:{
                      ...form.company_info, phone: e.target.value
                    }})
                  }}
                  className="w-100 mb-3" />
                  {errors.phoneErrors &&
                displayError(errors.phoneErrors)}
                </div>
                <div className="details">
                  <label htmlFor="website">Website</label>
                  <input type="text" name="website"
                  value={form.company_info.website}
                  onChange={(e)=>{
                    setForm({...form, company_info:{
                      ...form.company_info, website: e.target.value
                    }})
                  }}
                  className="w-100 mb-3" />
                  {errors.websiteErrors &&
                displayError(errors.websiteErrors)}
                </div>
                <div className="details">
                  <label htmlFor="address">Address</label>
                  <input type="text" name="address"
                  value={form.company_info.address}
                  onChange={(e)=>{
                    setForm({...form, company_info:{
                      ...form.company_info, address: e.target.value
                    }})
                  }}
                  className="w-100 mb-3" />
                  {errors.addressErrors &&
                displayError(errors.addressErrors)}
                </div>
                <div className="details">
                  <label htmlFor="city">City</label>
                  <input type="text" name="city"
                  value={form.company_info.city}
                  onChange={(e)=>{
                    setForm({...form, company_info:{
                      ...form.company_info, city: e.target.value
                    }})
                  }}
                  className="w-100 mb-3" />
                  {errors.cityErrors &&
                displayError(errors.cityErrors)}
                </div>
                <div className="details">
                  <label htmlFor="zipcode">Zipcode</label>
                  <input type="text" name="zipcode"
                  value={form.company_info.zip}
                  onChange={(e)=>{
                    setForm({...form, company_info:{
                      ...form.company_info, zip: e.target.value
                    }})
                  }}
                  className="w-100 mb-3" />
                  {errors.zipErrors &&
                displayError(errors.zipErrors)}
                </div>
                <div className="details">
                  <label htmlFor="country">Country</label>
                  <input type="text" name="country"
                  value={form.company_info.country}
                  onChange={(e)=>{
                    setForm({...form, company_info:{
                      ...form.company_info, country: e.target.value
                    }})
                  }}
                  className="w-100 mb-3" />
                  {errors.countryErrors &&
                displayError(errors.countryErrors)}
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
          <Button variant="primary" className="mt-4" onClick={handleSubmit}>Submit</Button>
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
