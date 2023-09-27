import React from 'react';
import './UserCars.css'
import { Link } from 'react-router-dom'
const cars = () => {
  return (
    <div className='pad'>
      <div className='containerFluid'>
        <h1>Owner cars</h1>
        <div className='row'>
          <div className='col-md-3'>
            <div id='sss'></div>
            <Link to='/Bloomberg'>
              <div className="card" style={{ background: "#9acef3" }}>
                <div className="image"><span className="text"><img src='https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iHTTIXsB6Co0/v0/1200x-1.jpg' /></span></div>
                <span className="title">Bloomberg</span>
                <span className="price">$100</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default cars