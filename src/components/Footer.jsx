import React from 'react'

export const Footer = () => {
  return (
    <div>
        <>
        <div
  className="container-fluid bg-dark text-light mt-5 wow fadeInUp"
  data-wow-delay="0.1s"
  style={{
    visibility: "visible",
    animationDelay: "0.1s",
    animationName: "fadeInUp"
  }}
>
  <div className="container">
    <div className="row gx-5">
      <div className="col-lg-4 col-md-6 footer-about">
        <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
          <a href="index.html" className="navbar-brand">
            <h1 className="m-0 text-white">
              <i className="fa fa-user-tie me-2" />
              SKYLINK
            </h1>
          </a>
          <p className="mt-3 mb-4">
            Lorem diam sit erat dolor elitr et, diam lorem justo amet clita stet
            eos sit. Elitr dolor duo lorem, elitr clita ipsum sea. Diam amet
            erat lorem stet eos. Diam amet et kasd eos duo.
          </p>
          <form action="">
            <div className="input-group">
              <input
                type="text"
                className="form-control border-white p-3"
                placeholder="Your Email"
              />
              <button className="btn btn-dark">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-lg-8 col-md-6">
        <div className="row gx-5">
          <div className="col-lg-4 col-md-12 pt-5 mb-5">
            <div className="section-title section-title-sm position-relative pb-3 mb-4">
              <h3 className="text-light mb-0">Get In Touch</h3>
            </div>
            <div className="d-flex mb-2">
              <i className="bi bi-geo-alt text-primary me-2" />
              <p className="mb-0">F 804, Titelnium City Center</p>
            </div>
            <div className="d-flex mb-2">
              <i className="bi bi-envelope-open text-primary me-2" />
              <p className="mb-0">info@skylinksoftweb.com</p>
            </div>
            <div className="d-flex mb-2">
              <i className="bi bi-telephone text-primary me-2" />
              <p className="mb-0">+012 345 67890</p>
            </div>
            <div className="d-flex mt-4">
              <a className="btn btn-primary btn-square me-2" href="#">
                <i className="fab fa-twitter fw-normal" />
              </a>
              <a className="btn btn-primary btn-square me-2" href="#">
                <i className="fab fa-facebook-f fw-normal" />
              </a>
              <a className="btn btn-primary btn-square me-2" href="#">
                <i className="fab fa-linkedin-in fw-normal" />
              </a>
              <a className="btn btn-primary btn-square" href="#">
                <i className="fab fa-instagram fw-normal" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
            <div className="section-title section-title-sm position-relative pb-3 mb-4">
              <h3 className="text-light mb-0">Quick Links</h3>
            </div>
            <div className="link-animated d-flex flex-column justify-content-start">
              <a className="text-light mb-2" href="#">
                <i className="bi bi-arrow-right text-primary me-2" />
                Home
              </a>
              <a className="text-light mb-2" href="#">
                <i className="bi bi-arrow-right text-primary me-2" />
                About Us
              </a>
              <a className="text-light mb-2" href="#">
                <i className="bi bi-arrow-right text-primary me-2" />
                Our Services
              </a>
              <a className="text-light mb-2" href="#">
                <i className="bi bi-arrow-right text-primary me-2" />
                Meet The Team
              </a>
              <a className="text-light mb-2" href="#">
                <i className="bi bi-arrow-right text-primary me-2" />
                Latest Blog
              </a>
              <a className="text-light" href="#">
                <i className="bi bi-arrow-right text-primary me-2" />
                Contact Us
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
            <div className="section-title section-title-sm position-relative pb-3 mb-4">
              <h3 className="text-light mb-0">Popular Links</h3>
            </div>
            <div className="link-animated d-flex flex-column justify-content-start">
              <a className="text-light mb-2" href="#">
                <i className="bi bi-arrow-right text-primary me-2" />
                Home
              </a>
              <a className="text-light mb-2" href="#">
                <i className="bi bi-arrow-right text-primary me-2" />
                About Us
              </a>
              <a className="text-light mb-2" href="#">
                <i className="bi bi-arrow-right text-primary me-2" />
                Our Services
              </a>
              <a className="text-light mb-2" href="#">
                <i className="bi bi-arrow-right text-primary me-2" />
                Meet The Team
              </a>
              <a className="text-light mb-2" href="#">
                <i className="bi bi-arrow-right text-primary me-2" />
                Latest Blog
              </a>
              <a className="text-light" href="#">
                <i className="bi bi-arrow-right text-primary me-2" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    </div>
  )
}
