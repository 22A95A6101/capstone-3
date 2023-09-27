import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './Header.css'
import Form from 'react-bootstrap/Form';
import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";
export default function Navbar() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="NavBar ">
        <nav
          className="navbar bg-body-tertiary fixed-top bg-dark"
          style={{ boxShadow: "1.5px 2px 5px 1.5px black" }}
        >
          <div className="container-fluid">
            <a
              className="navbar-brand text-white"
              href="#"
              style={{
                fontFamily: "Brush Script MT,cursive",
                fontSize: "30px",
              }}
            >
              <span>  <img id="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq56HrFf_sjCFKlKJ8p0qqvU6iNEO5zqYp_Q&usqp=CAU" /></span>
              <span>RideFleet</span>
            </a>
            <button
              className="navbar-toggler bg-white"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header bg-dark text-white">
                <h5
                  className="offcanvas-title"
                  id="offcanvasNavbarLabel"
                  style={{
                    fontFamily: "	Brush Script MT,cursive",
                    font: "25px bold",
                  }}
                >
                  CR
                </h5>
                <button
                  type="button"
                  className="btn-close bg-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body bg-info">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/"
                    >
                      <b>Home</b>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/status"
                    >
                      <b>Checkout  Car Status</b>
                    </a>
                  </li>
                 
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" onClick={handleShow} style={{ textDecoration: 'None', color: 'black', marginLeft: '-0px' }}>
                      <b>Car Feedback</b>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/logout"
                    >
                      <b>Log Out</b>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <Modal show={show} onHide={handleClose}>


        <Modal.Header closeButton>
          <Modal.Title><b>Feedback</b></Modal.Title>
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
              <div>
                <br />
                <Form.Label style={{ textTransform: "uppercase" }}> please Enter Your valuable feedback:</Form.Label>
                <Form.Control
                  type="textarea"
                  placeholder="Enter Your Last name"
                  autoFocus
                />
              </div>
              <div>
                <br/>
                <div className="star-rating">
                  {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                        
                        <button id="button6"
                        type="button"
                        key={index}
                        className={index <= (hover || rating) ? "on" : "off"}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                      > 
                        <span className="star"> &#9733;</span>
                      </button>
                
                    );
                  })}
                </div>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>


        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => alert('Your Feedback Submitted successfully \n We will reach you soon')}>
            Submit
          </Button>
        </Modal.Footer>


      </Modal>
    </>
  );
}

