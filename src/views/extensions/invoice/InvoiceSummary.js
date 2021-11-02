import React, { useState } from "react";
import { Row, Col, Card, Table, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import ReChartSalesExpenses from "./chart/ReChartSalesExpenses";
import "./invoiceSummary.css";
import { ADD_ITEM } from "../../../store/actions";
import { useSelector, useDispatch } from 'react-redux';
const InvoiceSummary = () => {
  const [show, setShow] = useState(false);
  const [item, setItem] = useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => console.log(show);
  const statsDefault = ['Paid', 'Pending', 'Draft']
  const dispatch = useDispatch()
  const {invoiceData} = useSelector(state => state.invoice)
  const [invDatas, setInvDatas] = useState({
      date: "",
      no: 0,
      customer: '',
      amount:0,
      stats: statsDefault[Math.floor(Math.random() * statsDefault.length)]
  })
  const defaultData= {
    date: "",
    no: 0,
    customer: '',
    amount:0,
    stats: statsDefault[Math.floor(Math.random() * statsDefault.length)]

  }
  const handleClick = ()=>{
    // const allDatas = [...invoiceData, invDatas]
    dispatch({
      type:ADD_ITEM,
      payload: invDatas
    })
    setInvDatas({...invDatas, ...defaultData})
    setShow(false)
  }
  return (
    <React.Fragment>
      <Row>
        {/* <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Sales and Expenses</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ReChartSalesExpenses />
                        </Card.Body>
                    </Card>
                </Col> */}
        {/* <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Sales, Receipt and Dues</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Table responsive className="mb-0">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Sales</th>
                                        <th>Receipt</th>
                                        <th>Dues</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Today</th>
                                        <td>$250.00</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">This Week</th>
                                        <td>$380.00</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">This Month</th>
                                        <td>$450.00</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">This Year</th>
                                        <td>$600.00</td>
                                        <td>the Bird</td>
                                        <td>@facebook</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Total</th>
                                        <td>$600.00</td>
                                        <td>the Bird</td>
                                        <td>@google</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col> */}
        <Col md={12}>
          <div className="wr d-flex justify-content-between align-items-center mb-2">
            <div className="status-section">
              <label htmlfor="status">Filter by status</label>
              <select name="status" className="status">
                <option value="pending">Pending</option>
                <option value="draft">Draft</option>
                <option value="paid">Paid</option>
              </select>
            </div>
            <div className="search-section d-flex align-items-center">
              <label for="search" className="mr-1 mb-0">
                Search
              </label>
              <input type="text" className="search w-10 mr-2" />
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
                  {(invoiceData && invoiceData.length > 1) &&
                    invoiceData.map((values, index)=>(
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{values.date}</td>
                        <td>{values.no}</td>
                        <td>{values.customer + (index+1)}</td>
                        <td>{`$ ${values.amount}`}</td>
                        <td>
                          <label className={`filter-status ${values.stats === 'Paid' ? 'success' :values.stats === 'Pending' ? 'pending' : 'draft'}`}>{values.stats}</label>
                        </td>
                        <td>
                          <Link to={`/invoice/invoice-basic/:${values.no}`}>View</Link>
                        </td>
                      </tr>
                    ))
                  }
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
            <label htmlFor="companyName">Name</label>
            <input
              name="companyName"
              type="text"
              className="w-100 company-input mb-3"
            />
            <div className="short-input my-3">
              <label htmlFor="companyEmail" className="mr-1">
                Email
              </label>
              <input
                name="companyEmail"
                type="text"
                className="w-30 company-input"
              />
              <label htmlFor="companyNo" className="mr-1">
                Phone No
              </label>
              <input
                name="companyNo"
                type="text"
                className="w-30 company-input"
              />
              <label htmlFor="companyWebsite" className="mr-1">
                Website
              </label>
              <input
                name="companyWebsite"
                type="text"
                className="w-30 company-input"
              />
            </div>
            <label htmlFor="companyAddress">Address</label>
            <input
              name="companyAddress"
              type="text"
              className="w-100 company-input mb-3"
            />
            <div className="short-input my-3">
              <label htmlFor="companyCity" className="mr-1">
                City
              </label>
              <input
                name="companyCity"
                type="text"
                className="w-30 company-input"
              />
              <label htmlFor="companyZipcode" className="mr-1">
                Zip Code
              </label>
              <input
                name="companyZipcode"
                type="text"
                className="w-30 company-input"
              />
              <label htmlFor="companyCountry" className="mr-1">
                Country
              </label>
              <input
                name="companyCountry"
                type="text"
                className="w-30 company-input"
              />
            </div>
          </div>
          <h4 className="my-5 bill">Bill To</h4>
          <div className="client">
            <label htmlFor="clientName">Name</label>
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
            <label htmlFor="clientAddress">Address</label>
            <input
              name="clientAddress"
              type="text"
              className="w-100 client-input mb-3"
            />
            <label htmlFor="clientPhone">Phone No</label>
            <input
              name="clientPhone"
              type="text"
              className="w-100 client-input mb-3"
            />
            {/* <div className="short-input my-3">
              <label htmlFor="clientCity" className="mr-1">
                City
              </label>
              <input
                name="clientCity"
                type="text"
                className="w-30 client-input"
              />
              <label htmlFor="clientZipcode" className="mr-1">
                Zip Code
              </label>
              <input
                name="clientZipcode"
                type="text"
                className="w-30 client-input"
              />
              <label htmlFor="clientCountry" className="mr-1">
                Country
              </label>
              <input
                name="clientCountry"
                type="text"
                className="w-30 client-input"
              />
            </div> */}
            <div className="payment-wrap my-4">
              <label htmlFor="invoicedate"  className="mr-1">
                Invoice Date
              </label>
              <input
                name="invoicedate"
                type="date"
                value={invDatas.date}
                onChange={(e)=>{setInvDatas({...invDatas, date: e.target.value})}}
                className="w-40 client-input"
              />
              <label htmlFor="paymentdue" className="mr-1">
                Payment Due
              </label>
              <input
                name="paymentdue"
                type="text"
                className="w-40 client-input"
              />
            </div>
            <div className="product-section">
              <label htmlFor="productDescription" className="mr-1">
                Product Description
              </label>
              <input type="text" className="product-input mb-3 w-100" />
              <h4 className="items">Item List</h4>
              <Table>
                <thead>
                  <tr>
                    <th>Item Name</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <td>
                    <input name="item-name" type="text"
                    value={invDatas.customer}
                    onChange={(e)=>{setInvDatas({...invDatas, customer: e.target.value})}}    
                    className="item-name" />
                  </td>
                  <td>
                    <input name="item-qty" type="number"
                    value={invDatas.no}
                    onChange={(e)=>{setInvDatas({...invDatas, no: e.target.value})}}    
                    className="item-qty" />
                  </td>
                  <td>
                    <input
                      name="item-price"
                      type="number"
                      value={invDatas.amount}
                      onChange={(e)=>{setInvDatas({...invDatas, amount: e.target.value})}}
                      className="item-price w-10"
                    />
                  </td>
                  <td>Total item</td>
                  <td><i class="fa fa-trash"></i></td>
                </tbody>
              </Table>
              <div className="add-btn-wrap">
                <button onClick={handleClick} className="add-btn">
                  <i class="fas fa-plus mr-2"></i>Add New Item
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
        {/* //The modal footer */}
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default InvoiceSummary;
