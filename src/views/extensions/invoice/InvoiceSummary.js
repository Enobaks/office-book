import React, { useEffect, useState } from "react";
import { Row, Col, Card, Table, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import ReChartSalesExpenses from "./chart/ReChartSalesExpenses";
import "./invoiceSummary.css";
import { ADD_ITEM } from "../../../store/actions";
import { useSelector, useDispatch } from "react-redux";
import { alt_no } from "../../../store/invoiceReducer";
import { validate, createDate, setError, displayError, resetFields } from "./validateInvoice";


const InvoiceSummary = () => {
  const [show, setShow] = useState(false);
  const [items, setItems] = useState([
    { order_title: "", quantity: "", amount: "", description: "" },
  ]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;

    const itemList = [...items];
    itemList[index][name] = value;
    setItems(itemList);
  };

  const handleAddInput = () => {
    setItems([...items, { order_title: "", quantity: "", amount: "", description: "" }]);
  };

  const handleRemoveInput = (index) => {
    const itemList = [...items];
    itemList.splice(index, 1);
    setItems(itemList);
  };

  const handleClose = () => {
    resetFields(errors, (v)=> setErrors({...v}))
    const combine = {...invDatas, orders:[...invDatas.orders, ...items]}
    
    const errorList = (validate(combine))
    console.log(errorList)
    if(errorList.length > 0){
      setError(errorList, errors, (dat)=> {
        setErrors({...dat})
      })
      return
    }
    const allDatas = [...invoiceData, combine]
    dispatch({
      type:ADD_ITEM,
      payload: allDatas
    })
    setInvDatas(createObj())
    setItems([
      { order_title: "", quantity: "", amount: "", description: "" },
    ])
    setShow(false)
  };
  const handleShow = () => console.log(show);
  const statsDefault = ["Paid", "Pending", "Draft"];
  const dispatch = useDispatch();
  const { invoiceData } = useSelector((state) => state.invoice);
  

  const generateNo = (nob)=>{
    let no = ''
    for(let i = 0; i< nob; i++){
      no += Math.floor(Math.random() * i+2)
    }
    return no
  }
  function createObj (){
    return {
      date: createDate(),
      no: parseInt(generateNo(6)),
      alt_no,
      invoice_no: parseInt(generateNo(13)),
      stats: statsDefault[Math.floor(Math.random() * statsDefault.length)],
      company_info:{
        company_name: '',
        address: '',
        mail: '',
        phone: '',
        city: '',
        zip: '',
        country: '',
        website: ''
    },
    client_info:{
        client_name:'',
        client_address: '',
        client_phone: '',
        client_mail: ''
    },
    orders:[]
    }
  }
  const [invDatas, setInvDatas] = useState(createObj());
  const [filteredInvoice, setFilteredInvoice] = useState(null);
  const [errors, setErrors] = useState({
      company_nameErrors: '',
      addressErrors: '',
      mailErrors: '',
      phoneErrors: '',
      cityErrors: '',
      ordersErrors: '',
      zipErrors: '',
      countryErrors: '',
      websiteErrors: '',
      client_nameErrors:'',
      client_addressErrors: '',
      client_phoneErrors: '',
      client_mailErrors: ''
  })
  
  const filterInvoice = (e) => {
    const filteredDatas = invoiceData.filter(
      (data) => data.stats === e.target.value
    );
    setFilteredInvoice(filteredDatas);
  };

 

  // const [searchText, setSearchText] = useState("");
  const searchInvoice = (value) => {
    // setSearchText(value);
    filterData(value);
  };

  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setFilteredInvoice(invoiceData);
    const filteredData = invoiceData.filter((item) => {
      return Object.keys(item).some((key) => {
        return item[key].toString().toLowerCase().includes(lowercasedValue);
      });
    });

    setFilteredInvoice(filteredData);
  };

  return (
    <React.Fragment>
      <Row>
        <Col md={12}>
          <div className="filter-container mb-2">
            <div className="status-section">
              <label htmlfor="status">Filter by status</label>
              <select name="status" onChange={filterInvoice} className="status">
                <option value="">All</option>
                <option value="Pending">Pending</option>
                <option value="Draft">Draft</option>
                <option value="Paid">Paid</option>
              </select>
            </div>
            <div className="search-section d-flex align-items-center">
              <label for="search" className="mr-1 mb-0">
                Search
              </label>
              <input
                type="text"
                className="search w-10 mr-2"
                onChange={(e) => searchInvoice(e.target.value)}
              />
            </div>
            <div className="new-invoice">
              <button
                type="submit"
                className="btn invoice-btn"
                onClick={() => setShow(true)}
              >
                <i class="fas fa-plus"></i>New Invoice
              </button>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Recent Orders</Card.Title>
            </Card.Header>
            <Card.Body>
              <Table responsive className="mb-0">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>No</th>
                    <th>Customer</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {invoiceData &&
                  filteredInvoice &&
                  invoiceData.length > 0 &&
                  filteredInvoice.length > 0
                    ? filteredInvoice.map((values, index) => (
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{values.date}</td>
                        <td>{values.no}</td>
                        <td>{values.company_info.company_name}</td>
                        <td>{`$ ${values.alt_no()}`}</td>
                        <td>
                          <label
                            className={`filter-status ${
                              values.stats === "Paid"
                                ? "success"
                                : values.stats === "Pending"
                                ? "pending"
                                : "draft"
                            }`}
                          >
                            {values.stats}
                          </label>
                        </td>
                        <td>
                          <Link to={`/invoice/invoice-basic/${values.no}`}>View</Link>
                        </td>
                      </tr>
                    ))
                    : invoiceData.map((values, index) => (
                        <tr>
                          <th scope="row">{index + 1}</th>
                          <td>{values.date}</td>
                          <td>{values.no}</td>
                          <td>{values.company_info.company_name}</td>
                          <td>{`$ ${values.alt_no()}`}</td>
                          <td>
                            <label
                              className={`filter-status ${
                                values.stats === "Paid"
                                  ? "success"
                                  : values.stats === "Pending"
                                  ? "pending"
                                  : "draft"
                              }`}
                            >
                              {values.stats}
                            </label>
                          </td>
                          <td>
                            <Link to={`/invoice/invoice-basic/${values.no}`}>View</Link>
                          </td>
                        </tr>
                      ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            New Invoice
          </Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          <h4 className="mb-4 bill">Bill From</h4>
          <div className="company">
            <div className="ctrler">
              <label htmlFor="companyName">Name</label>
              <input
                name="companyName"
                type="text"
                onChange={(e)=>{
                  setInvDatas({...invDatas, company_info:{
                    ...invDatas.company_info, company_name: e.target.value
                  }})
                }}
                className="w-100 company-input mb-3"
              />
              {errors.company_nameErrors && displayError(errors.company_nameErrors)}
            </div>
            <div className="short-input d-flex my-3">
              <div className="short-ctrler">
                <label htmlFor="companyEmail" className="mr-1">
                  Email
                </label>
                <input
                  name="companyEmail"
                  type="text"
                  className="email company-input"
                  onChange={(e)=>{
                    setInvDatas({...invDatas, company_info:{
                      ...invDatas.company_info, mail: e.target.value
                    }})
                  }}
                />
                {errors.mailErrors && displayError(errors.mailErrors)}
              </div>
              <div className="short-ctrler righter">
                <label htmlFor="companyNo" className="mr-1">
                  Phone No
                </label>
                <input
                  name="companyNo"
                  type="text"
                  className="phone company-input"
                  onChange={(e)=>{
                    setInvDatas({...invDatas, company_info:{
                      ...invDatas.company_info, phone: e.target.value
                    }})
                  }}
                />
                {errors.phoneErrors && displayError(errors.phoneErrors)}
              </div>
            </div>
            <div className="ctrler">
              <label htmlFor="companyWebsite" className="mr-1">
                Website
              </label>
              <input
                name="companyWebsite"
                type="text"
                className="website company-input mb-3"
                onChange={(e)=>{
                  setInvDatas({...invDatas, company_info:{
                    ...invDatas.company_info, website: e.target.value
                  }})
                }}
              />
              {errors.websiteErrors && displayError(errors.websiteErrors)}
            </div>
            <div className="ctrler">
              <label htmlFor="companyAddress">Address</label>
              <input
                name="companyAddress"
                type="text"
                className="w-100 company-input mb-3"
                onChange={(e)=>{
                  setInvDatas({...invDatas, company_info:{
                    ...invDatas.company_info, address: e.target.value
                  }})
                }}
              />
              {errors.addressErrors && displayError(errors.addressErrors)}
            </div>
            
            <div className="short-input d-flex my-3">
              <div className="short-ctrler">
                <label htmlFor="companyCity" className="mr-1">
                  City
                </label>
                <input
                  name="companyCity"
                  type="text"
                  className="city company-input"
                  onChange={(e)=>{
                    setInvDatas({...invDatas, company_info:{
                      ...invDatas.company_info, city: e.target.value
                    }})
                  }}
                />
                {errors.cityErrors && displayError(errors.cityErrors)}
              </div>
              <div className="short-ctrler righter">
                <label htmlFor="companyZipcode" className="mr-1">
                  Zip Code
                </label>
                <input
                  name="companyZipcode"
                  type="text"
                  className="zipcode company-input"
                  onChange={(e)=>{
                    setInvDatas({...invDatas, company_info:{
                      ...invDatas.company_info, zip: e.target.value
                    }})
                  }}
                />
                {errors.zipErrors && displayError(errors.zipErrors)}
                
              </div>
            
            </div>
            <div className="ctrler">
              <label htmlFor="companyCountry" className="mr-1 mt-3">
                Country
              </label>
              <input
                name="companyCountry"
                type="text"
                className="w-100 company-input mb-3"
                onChange={(e)=>{
                  setInvDatas({...invDatas, company_info:{
                    ...invDatas.company_info, country: e.target.value
                  }})
                }}
              />
              {errors.countryErrors && displayError(errors.countryErrors)}     
            </div>   
          </div>
          <h4 className="my-5 bill">Bill To</h4>
          <div className="client">
            <div className="ctrler">
              <label htmlFor="clientName">Name</label>
              <input
                name="clientName"
                type="text"
                className="w-100 client-input mb-3"
                onChange={(e)=>{
                  setInvDatas({...invDatas, client_info:{
                    ...invDatas.client_info, client_name: e.target.value
                  }})
                }}
              />
              {errors.client_nameErrors && displayError(errors.client_nameErrors)}
            </div>
            <div className="ctrler">
              <label htmlFor="clientEmail" className="mr-1">
                Email
              </label>
              <input
                name="clientEmail"
                type="text"
                className="w-100 client-input mb-3"
                onChange={(e)=>{
                  setInvDatas({...invDatas, client_info:{
                    ...invDatas.client_info, client_mail: e.target.value
                  }})
                }}
              />
              {errors.client_mailErrors && displayError(errors.client_mailErrors)}
            </div>
            <div className="ctrler">
              <label htmlFor="clientAddress">Address</label>
              <input
                name="clientAddress"
                type="text"
                className="w-100 client-input mb-3"
                onChange={(e)=>{
                  setInvDatas({...invDatas, client_info:{
                    ...invDatas.client_info, client_address: e.target.value
                  }})
                }}
              />
              {errors.client_addressErrors && displayError(errors.client_addressErrors)}
            </div>
            <div className="ctrler">
              <label htmlFor="clientPhone">Phone No</label>
              <input
                name="clientPhone"
                type="text"
                className="w-100 client-input mb-3"
                onChange={(e)=>{
                  setInvDatas({...invDatas, client_info:{
                    ...invDatas.client_info, client_phone: e.target.value
                  }})
                }}
              /> 
              {errors.client_phoneErrors && displayError(errors.client_phoneErrors)}
            </div>
            </div>

            {/* <div className="payment-wrap my-4">
              <label htmlFor="invoicedate" className="mr-1">
                Invoice Date
              </label>
              <input
                name="clientName"
                type="text"
                className="w-100 client-input mb-3"
              />
              <label htmlFor="clientEmail" className="mr-1">
                Email
              </label>
              <input
                name="clientEmail"
                type="text"
                className="w-100 client-input mb-3"
              />
            </div> */}
              
            <div className="product-section">
              <h4 className="items mt-2">Product/Service List</h4>
              {items.map((item, i) => (
              }

              <div className="add-btn-wrap">
                <button onClick={handleAddInput} className="add-btn">
                  <i class="fas fa-plus mr-2"></i>Add New Item
                </button>
              </div>
            </div>
          </div>
        
           
          
        </Modal.Body>
        {/* //The modal footer */}
        <Modal.Footer>
          <Button onClick={handleClose}>Submit and Create Invoice</Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default InvoiceSummary;
