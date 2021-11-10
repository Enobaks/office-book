import React, { useRef, useState, useEffect } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Link } from 'react-router-dom';

import darkLogo from '../../../assets/images/logo-dark.png';
import { useSelector, useDispatch } from 'react-redux';



const InvoiceBasic = ({match}) => {
    const inputEl = useRef(null);
    const {invoiceData} = useSelector(state => state.invoice)
    const id = match.params.id
    const [singleData, setSingleData] = useState(null)
    useEffect(() => {
        if(id !== undefined && id.length > 0 && invoiceData.length > 0){
            const selectedData = invoiceData.filter(e => e.no === +id)
            setSingleData(selectedData)
        }
    }, [id, invoiceData])
    
    const handlePrint = useReactToPrint({
        content: () => inputEl.current
    });
    
    return (
        <React.Fragment>
            {
                singleData && singleData.map(data=>(
                    <div key={data.no} className="container" id="printTable">
                <div>
                    <div className="card" ref={inputEl}>
                        <div className="row invoice-contact">
                            <div className="col-md-8">
                                <div className="invoice-box row">
                                    <div className="col-sm-12">
                                        <table className="table table-responsive invoice-table table-borderless p-l-20">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <Link to="#" className="b-brand">
                                                            <img className="img-fluid" src={darkLogo} alt="Gradient Able Logo" />
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>{data.company_info.company_name}</td>
                                                </tr>
                                                <tr>
                                                    <td>{data.company_info.address}</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a className="text-secondary" href= {data.company_info.mail} target="_top">
                                                           {data.company_info.mail}
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>{data.company_info.phone}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4" />
                        </div>
                        <div className="card-body">
                            <div className="row invoive-info">
                                <div className="col-md-4 col-xs-12 invoice-client-info">
                                    <h6>Client Information:</h6>
                                    <h6 className="m-0">{data.client_info.client_name}</h6>
                                    <p className="m-0 m-t-10">{data.client_info.client_address}</p>
                                    <p className="m-0">{data.client_info.client_phone}</p>
                                    <p>
                                        <a className="text-secondary" href={data.client_info.client_mail} target="_top">
                                            {data.client_info.client_mail}
                                        </a>
                                    </p>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <h6>Order Information :</h6>
                                    <table className="table table-responsive invoice-table invoice-order table-borderless">
                                        <tbody>
                                            <tr>
                                                <th>Date :</th>
                                                <td>{data.date}</td>
                                            </tr>
                                            <tr>
                                                <th>Status :</th>
                                                <td>
                                                    <span className="label label-warning">{data.stats}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Id :</th>
                                                <td>#{data.no}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <h6 className="m-b-20">
                                        Invoice Number <span>#{data.invoice_no}</span>
                                    </h6>
                                    <h6 className="text-uppercase text-primary">
                                        Total Due :<span>{data.alt_no() + (data.alt_no() * 0.1) - (data.alt_no() * 0.05)}</span>
                                    </h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="table-responsive">
                                        <table className="table invoice-detail-table">
                                            <thead>
                                                <tr className="thead-default">
                                                    <th>Description</th>
                                                    <th>Quantity</th>
                                                    <th>Amount</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {data.orders.map((order, i)=>(
                                                    <tr key={i}>
                                                        <td>
                                                            <h6>{order.order_title}</h6>
                                                            <p className="m-0">
                                                                {order.description}
                                                            </p>
                                                        </td>
                                                        <td>{order.quantity}</td>
                                                        <td>${order.amount}</td>
                                                        <td>${order.quantity * order.amount}</td>
                                                    </tr>
                                            ))}
                                            </tbody>
                                            
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <table className="table table-responsive invoice-table invoice-total">
                                        <tbody>
                                            <tr>
                                                <th>Sub Total :</th>
                                                <td>{data.alt_no()}</td>
                                            </tr>
                                            <tr>
                                                <th>Taxes (10%) :</th>
                                                <td>{(data.alt_no() * 0.1)}</td>
                                            </tr>
                                            <tr>
                                                <th>Discount (5%) :</th>
                                                <td>{(data.alt_no() * 0.05)}</td>
                                            </tr>
                                            <tr className="text-info">
                                                <td>
                                                    <hr />
                                                    <h5 className="text-primary m-r-10">Total :</h5>
                                                </td>
                                                <td>
                                                    <hr />
                                                    <h5 className="text-primary">{data.alt_no() + (data.alt_no() * 0.1) - (data.alt_no() * 0.05)}</h5>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <h6>Terms and Condition :</h6>
                                    <p>
                                        lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center btn-page">
                        <div className="col-sm-12 invoice-btn-group text-center">
                            <button type="button" className="btn btn-primary btn-print-invoice m-b-10" onClick={handlePrint}>
                                Print
                            </button>
                            <button type="button" className="btn waves-effect waves-light btn-secondary m-b-10 ">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
                ))
            }
            {
                !singleData && <div>
                    loading...........
                </div>
            }
        </React.Fragment>
    );
};

export default InvoiceBasic;
