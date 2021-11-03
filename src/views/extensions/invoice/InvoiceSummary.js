import React, { useState } from "react";
import { Row, Col, Card, Table, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import ReChartSalesExpenses from "./chart/ReChartSalesExpenses";
import "./invoiceSummary.css";
import { ADD_ITEM } from "../../../store/actions";
import { useSelector, useDispatch } from "react-redux";
const InvoiceSummary = () => {
  const [show, setShow] = useState(false);
  const [items, setItems] = useState([
    { name: "", qty: "", price: "", description: "" },
  ]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;

    const itemList = [...items];
    itemList[index][name] = value;
    setItems(itemList);
  };

  const handleAddInput = () => {
    setItems([...items, { name: "", qty: "", price: "", description: "" }]);
  };

  const handleRemoveInput = (index) => {
    const itemList = [...items];
    itemList.splice(index, 1);
    setItems(itemList);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => console.log(show);
  const statsDefault = ["Paid", "Pending", "Draft"];
  const dispatch = useDispatch();
  const { invoiceData } = useSelector((state) => state.invoice);
  const [invDatas, setInvDatas] = useState({
    date: "",
    no: 0,
    customer: "",
    amount: 0,
    stats: statsDefault[Math.floor(Math.random() * statsDefault.length)],
  });
  const defaultData = {
    date: "",
    no: 0,
    customer: "",
    amount: 0,
    stats: statsDefault[Math.floor(Math.random() * statsDefault.length)],
  };
  const [filteredInvoice, setFilteredInvoice] = useState(null);
  const handleClick = () => {
    // const allDatas = [...invoiceData, invDatas]
    // dispatch({
    //   type:ADD_ITEM,
    //   payload: allDatas
    // })
    // setInvDatas({...invDatas, ...defaultData})
    // setShow(false)
  };

  const filterInvoice = (e) => {
    const filteredDatas = invoiceData.filter(
      (data) => data.stats === e.target.value
    );
    setFilteredInvoice(filteredDatas);
  };

  const searchInvoice = (e) => {
    const searchFilter = invoiceData.filter((data) => {
      for (let value in data) {
        if (e.target.value.trim().length <= 0) return [data];
        console.log(data[value]);
        // if (data[value].includes(e.target.value)) {
        // }
      }
    });
    // setFilteredInvoice(searchFilter);
    // console.log(e.target.value);
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
                onChange={searchInvoice}
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
                          <td>{values.customer + (index + 1)}</td>
                          <td>{`$ ${values.amount}`}</td>
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
                            <Link to="/invoice/invoice-basic">View</Link>
                          </td>
                        </tr>
                      ))
                    : invoiceData.map((values, index) => (
                        <tr>
                          <th scope="row">{index + 1}</th>
                          <td>{values.date}</td>
                          <td>{values.no}</td>
                          <td>{values.customer + (index + 1)}</td>
                          <td>{`$ ${values.amount}`}</td>
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
                            <Link to="/invoice/invoice-basic">View</Link>
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
              <label htmlFor="invoicedate" className="mr-1">
                Invoice Date
              </label>
              <input
                name="invoicedate"
                type="date"
                value={invDatas.date}
                onChange={(e) => {
                  setInvDatas({ ...invDatas, date: e.target.value });
                }}
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
              <h4 className="items mt-2">Product/Service List</h4>
              {items.map((item, i) => {
                return (
                  <div key={i} className="item-table mb-3">
                    <div className="item1 my-3">
                      <div className="item1-name">
                        <input
                          name="name"
                          type="text"
                          value={item.name}
                          className="item-name "
                          placeholder="Product name"
                          onChange={(e) => handleChange(e, i)}
                        />
                      </div>
                      <div className="item1-qty">
                        <input
                          name="qty"
                          type="number"
                          value={item.qty}
                          className="item-qty"
                          placeholder="qty"
                          onChange={(e) => handleChange(e, i)}
                        />
                      </div>
                      <div className="item1-price">
                        <input
                          name="price"
                          type="number"
                          value={item.price}
                          className="item-price w-10"
                          placeholder="amount"
                          onChange={(e) => handleChange(e, i)}
                        />
                      </div>
                      <div className="item1-total">
                        <p>Total item</p>
                      </div>
                      <div className="item1-description">
                        <input
                          name="name"
                          type="text"
                          value={item.name}
                          className="item-name w-90"
                          placeholder="Product description"
                          onChange={(e) => handleChange(e, i)}
                        />
                      </div>
                      <div className="item1-bin">
                        <i
                          className="fa fa-trash bin"
                          onClick={() => handleRemoveInput(i)}
                        ></i>
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* <Table>
                <thead>
                  <tr>
                    <th>Item Name</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                
              </Table> */}
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
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default InvoiceSummary;
