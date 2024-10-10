import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 w-100">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="d-flex justify-content-around flex-column col-md-3 col-lg-3 col-xl-3 mx-auto mt py-4-3">
            <img
              src="logo.png"
              alt="VIDEOSPIRE"
              style={{ marginBottom: '20px' }}
            />
            <p>
              Questions? <a href="tel:1800-040-1234" className="text-danger">Call 1800-040-1234</a>
            </p>
            <div className="d-flex justify-content-center">
              <a href="#" className=" link-underline link-underline-opacity-0 text-white mx-2"><i className="fab fs-4 fa-facebook-f"></i></a>
              <a href="#" className=" link-underline link-underline-opacity-0 text-white mx-2"><i className="fab fs-4 fa-twitter"></i></a>
              <a href="#" className=" link-underline link-underline-opacity-0 text-white mx-2"><i className="fab fs-4 fa-google-plus-g"></i></a>
              <a href="#" className=" link-underline link-underline-opacity-0 text-white mx-2"><i className="fab fs-4 fa-whatsapp"></i></a>
            </div>
          </div>

          {/* Explore Section */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt py-4-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Explore</h5>
            <ul className="text-danger d-flex flex-column h-50 justify-content-between align-items-start">
              <li><a href="#" className=" link-underline link-underline-opacity-0 text-white">Profile</a></li>
              <li><a href="#" className=" link-underline link-underline-opacity-0 text-white">Social</a></li>
              <li><a href="#" className=" link-underline link-underline-opacity-0 text-white">User Playlist</a></li>
            </ul>
          </div>


          {/* Company Section */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt py-4-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Company</h5>
            <ul className="text-danger d-flex flex-column h-75 justify-content-between align-items-start">
              <li><a href="#" className=" link-underline link-underline-opacity-0 text-white">Wishlist</a></li>
              <li><a href="#" className=" link-underline link-underline-opacity-0 text-white">My Account</a></li>
              <li><a href="#" className=" link-underline link-underline-opacity-0 text-white">Checkout</a></li>
              <li><a href="#" className=" link-underline link-underline-opacity-0 text-white">Cart</a></li>
            </ul>
          </div>


          {/* Legal Section */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt py-4">
            <h5 className="text-uppercase mb-4 font-weight-bold">Legal</h5>
            <ul className="text-danger d-flex flex-column h-75 justify-content-between align-items-start ">
              <li><a href="#" className=" link-underline link-underline-opacity-0 text-white">Home</a></li>
              <li><a href="#" className=" link-underline link-underline-opacity-0 text-white">Languages</a></li>
              <li><a href="#" className=" link-underline link-underline-opacity-0 text-white">Buy Plan</a></li>
              <li><a href="#" className=" link-underline link-underline-opacity-0 text-white">Shop</a></li>
            </ul>
          </div>


          {/* Newsletter Section */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt py-4-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Newsletter</h5>
            <p>Subscribe to our newsletter and never miss out on our latest updates.</p>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Email Here.."
                aria-label="Recipient's email"
              />
              <div className="input-group-append">
                <button className="btn btn-danger" type="button">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <p>&copy; 2024 VIDEOSPIRE. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
