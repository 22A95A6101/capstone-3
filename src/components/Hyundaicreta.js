import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import './Singlecar.css'
function Hyundaicreta() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className="container">
      <div>
        <h1 className="text-white" style={{ colour: "white" }}>Hyundaicreta</h1>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card4" style={{ background: "#9acef3" }}>
            <div className="image4"><span className="text"><img src='https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/7695/1651645683867/front-left-side-47.jpg?imwidth=420&impolicy=resize' /></span></div>
            <span className="title">Hyundaicreta</span>
            <span className="price">$100</span>
          </div>
          <Button className='button4' onClick={handleShow}>Book Your Car</Button>
        </div>
        <div className="col-md-8">
          <table>
            <tr>
              <th><b>Seating</b></th>
              <td>2 Seaters</td>
            </tr>
            <tr>
              <th><b>Fuel Type</b></th>
              <td>Diesel</td>
            </tr>
            <tr>
            <th><b>km's Driven</b></th>
              <td>44,876</td>
            </tr>
            <tr>
            <th><b>Car Model</b></th>
              <td>Hyundaicreta</td>
            </tr>
            <tr>
            <th><b>Status</b></th>
              <td>Available</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title><b>RENT A CAR</b></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <Form.Label>First Name:</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter Your First name"
                                                    autoFocus
                                                />
                                            </div>
                                            <div className='col-md-6'>
                                                <Form.Label>Last Name:</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter Your Last name"
                                                    autoFocus
                                                />
                                            </div>
                                        </div>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <Form.Label>Contact Number::</Form.Label>
                                                <Form.Control
                                                    type="digits"
                                                    placeholder="Enter Your Mobile Number"
                                                    autoFocus maxlength="10"
                                                />
                                            </div>
                                            <div className='col-md-6'>
                                                <Form.Label>Id Proof:</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Id Number"
                                                    autoFocus
                                                />
                                            </div>
                                        </div>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Address:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter your Address"
                                            autoFocus
                                        />
                                    </Form.Group>



                                    <Modal.Header>
                                        <Modal.Title><b>Booking Details Details:</b></Modal.Title>
                                    </Modal.Header>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <Form.Label>From Date:</Form.Label>
                                                <Form.Control
                                                    type="date"
                                                    placeholder="Enter the date"
                                                    autoFocus
                                                />
                                            </div>
                                            <div className='col-md-6'>
                                                <Form.Label>To Date:</Form.Label>
                                                <Form.Control
                                                    type="date"
                                                    placeholder="Enter the date"
                                                    autoFocus
                                                />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <Form.Label>Amount:</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Amount"
                                                    autoFocus
                                                />
                                            </div>
                                        </div>
                                        <Form.Label>Description:</Form.Label>
                                        <Form.Control
                                            type="textarea"
                                            placeholder="Enter your Suggestions"
                                            autoFocus
                                        />
                              
                                    </Form.Group>



                                    <Modal.Header>
                                        <Modal.Title><b>Payment Details:</b></Modal.Title>
                                    </Modal.Header>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Name as Card:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter your card number"
                                            autoFocus
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Card Number:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter your card number"
                                            autoFocus maxlength="16"
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <Form.Group>
                                                    <Form.Label>CVV:</Form.Label>
                                                    <Form.Control
                                                        type="password"
                                                        placeholder="CVV"
                                                        autoFocus maxlength="3"
                                                    />
                                                </Form.Group>
                                            </div>
                                            <div className='col-md-6'>
                                                <Form.Group>
                                                    <Form.Label>Expiry Date:</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="MM/YYYY"
                                                        id="expiry" maxlength="7"
                                                    />
                                                </Form.Group>
                                            </div>
                                        </div>
                                    </Form.Group>


                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={() => alert('Payment Successfull')}>
                                    Proceed to Payment
                                </Button>
                            </Modal.Footer>
                        </Modal>
    </>
  );
}
export default Hyundaicreta;