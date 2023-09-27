import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import './Singlecar.css'
function Status() {
    return (
        <>
            <div className="container" >
                <table style={{marginTop:'150px',border:'8px solid black'}}>
                    <tr>
                        <th>Transaction ID:</th>
                        <th>Date</th>
                        <th>Car Model</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>XRP5643</td>
                        <td>05-03-2023</td>
                        <td>Audi</td>
                        <td style={{color:'lightgreen'}}><b>23 days left</b></td>
                    </tr>
                    <tr>
                    <td>XRP9833</td>
                        <td>01-01-2023</td>
                        <td>Hyundai Verna</td>
                        <td style={{color:'red'}}><b>Completed</b></td>
                    </tr>
                </table>
            </div>
        </>
    );
}
export default Status;