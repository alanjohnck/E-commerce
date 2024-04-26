import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/addressDetail.css';

function AddressDetail() {
  const navigate = useNavigate()
  const [addressData, setAddressData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    state: '',
    district: '',
    zip: '',
    email: ''
  });
  const handleChange = (e) => {
    setAddressData({ ...addressData, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
   /// localStorage.setItem('address', JSON.stringify(addressData));
   //connection to database
    navigate('/')
  };

  return (
    <div className="container py-5">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col">
          <div className="card my-4 shadow-3">
            <div className="row g-0">
              <div className="col-xl-6 d-xl-block bg-image">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Others/extended-example/delivery.webp"
                  alt="Sample photo"
                  className="img-fluid"
                />
                <div className="mask">
                  <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-center" style={{ marginTop: '220px' }}>
                      <i className="fas fa-truck text-white fa-3x"></i>
                      <p className="text-white title-style">Delivery Information</p>
                      <p className="text-white mb-0"></p>
                      <figure className="text-center mb-0">
                        <blockquote className="blockquote text-white">
                          <p className="pb-3">
                            <i
                              className="fas fa-quote-left fa-xs text-primary"
                              style={{ color: 'hsl(210, 100%, 50%)' }}
                            ></i>
                            <span className="lead font-italic">Everything at your doorstep.</span>
                            <i
                              className="fas fa-quote-right fa-xs text-primary"
                              style={{ color: 'hsl(210, 100%, 50%)' }}
                            ></i>
                          </p>
                        </blockquote>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="card-body p-md-5 text-black">
                  <h3 className="mb-4 text-uppercase">Delivery Info</h3>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div data-mdb-input-init className="form-outline">
                        <input type="text" id="form3Example1m" className="form-control form-control-lg" onChange={handleChange} />
                        <label className="form-label" htmlFor="form3Example1m">First name</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div data-mdb-input-init className="form-outline">
                        <input type="text" id="form3Example1n" className="form-control form-control-lg"  onChange={handleChange} />
                        <label className="form-label" htmlFor="form3Example1n">Last name</label>
                      </div>
                    </div>
                  </div>
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input type="text" id="form3Example8" className="form-control form-control-lg"  onChange={handleChange} />
                    <label className="form-label" htmlFor="form3Example8">Address</label>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                     <div data-mdb-input-init className="form-outline">
                        <input type="text" id="form3Example1m" className="form-control form-control-lg"  onChange={handleChange} />
                        <label className="form-label" htmlFor="form3Example1m">State</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                     <div data-mdb-input-init className="form-outline">
                        <input type="text" id="form3Example1m" className="form-control form-control-lg"  onChange={handleChange} />
                        <label className="form-label" htmlFor="form3Example1m">District</label>
                      </div>
                    </div>
                  </div>
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input type="text" id="form3Example3" className="form-control form-control-lg"  onChange={handleChange} />
                    <label className="form-label" htmlFor="form3Example3">Zip</label>
                  </div>
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input type="text" id="form3Example2" className="form-control form-control-lg"   onChange={handleChange}/>
                    <label className="form-label" htmlFor="form3Example2">Email</label>
                  </div>
                  <div className="d-flex justify-content-end pt-3">
                    <button
                      type="button"
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn"
                      onClick={handleSubmit}
                    >
                     Add Address
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressDetail;
