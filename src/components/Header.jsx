import React from "react";
import { Helmet } from "react-helmet";

export const Header = () => {
  var style1 = {
    maxWidth: "900px",
  };
  return (
    <>
      <Helmet>
        <link href="img/favicon.ico" rel="icon" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Rubik:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />

        <link
          href="lib/owlcarousel/assets/owl.carousel.min.css"
          rel="stylesheet"
        />
        <link href="lib/animate/animate.min.css" rel="stylesheet" />

        <link href="css/bootstrap.min.css" rel="stylesheet" />

        <link href="css/style.css" rel="stylesheet" />
      </Helmet>
      <div class="container-fluid position-relative p-0">
        <nav class="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
          <a href="index.html" class="navbar-brand p-0">
            <h1 class="m-0">
              <i class="fa fa-user-tie me-2">
                </i>
                SKYLINK SOFTWEB
            </h1>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span class="fa fa-bars"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-0">
              <a href="index.html" class="nav-item nav-link active">
                Home
              </a>
              <a href="about.html" class="nav-item nav-link">
                About
              </a>
              <a href="service.html" class="nav-item nav-link">
                Services
              </a>
              <div class="nav-item dropdown">
                <a
                  href="#"
                  class="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Blog
                </a>
                <div class="dropdown-menu m-0">
                  <a href="blog.html" class="dropdown-item">
                    Blog Grid
                  </a>
                  <a href="detail.html" class="dropdown-item">
                    Blog Detail
                  </a>
                </div>
              </div>
              <div class="nav-item dropdown">
                <a
                  href="#"
                  class="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <div class="dropdown-menu m-0">
                  <a href="price.html" class="dropdown-item">
                    Pricing Plan
                  </a>
                  <a href="feature.html" class="dropdown-item">
                    Our features
                  </a>
                  <a href="team.html" class="dropdown-item">
                    Team Members
                  </a>
                  <a href="testimonial.html" class="dropdown-item">
                    Testimonial
                  </a>
                  <a href="quote.html" class="dropdown-item">
                    Free Quote
                  </a>
                </div>
              </div>
              <a href="contact.html" class="nav-item nav-link">
                Contact
              </a>
            </div>
            <butaton
              type="button"
              class="btn text-primary ms-3"
              data-bs-toggle="modal"
              data-bs-target="#searchModal"
            >
              <i class="fa fa-search"></i>
            </butaton>
            <a
              href="https://htmlcodex.com/startup-company-website-template"
              class="btn btn-primary py-2 px-4 ms-3"
            >
              Download Pro Version
            </a>
          </div>
        </nav>

        <div
          id="header-carousel"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner" data-interval="1000">
            <div class="carousel-item">
              <img class="w-100" src="img/carousel-2.jpg" alt="Image" />
              <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div class="p-3" style={style1}>
                  <h5 class="text-white text-uppercase mb-3 animated slideInDown">
                    Creative &amp; Innovative
                  </h5>
                  <h1 class="display-1 text-white mb-md-4 animated zoomIn">
                    Creative &amp; Innovative Digital Solution
                  </h1>
                  <a
                    href="quote.html"
                    class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Free Quote
                  </a>
                  <a
                    href=""
                    class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div class="carousel-item active">
              {/* <video class="w-100"  alt="Image" controls autoplay loop >
                <source src="img/corl.mp4" type="video/ogg" alt="sjhj" />
                <source src="img/corl.mp4" type="video/mp4" alt="sjhj"/>
              </video> */}
              <img class="w-100" src="img/Theme3.gif" alt="Image" />
              
              <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div class="p-3" style={style1}>
                  <h5 class="text-white text-uppercase mb-3 animated slideInDown">
                    Creative &amp; Innovative
                  </h5>
                  <h1 class="display-1 text-white mb-md-4 animated zoomIn">
                    Creative &amp; Innovative Digital Solution
                  </h1>
                  <a
                    href="quote.html"
                    class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Free Quote
                  </a>
                  <a
                    href=""
                    class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <Helmet>
      <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="lib/wow/wow.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/counterup/counterup.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>

    
    <script src="js/main.js"></script>
      </Helmet>
    </>
  );
};
