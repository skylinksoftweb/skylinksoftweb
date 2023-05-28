import React from "react";

export const ClientHistory = () => {
  var style1 = {
    background: "rgba(9, 30, 62, .7)",
  };
  var style2 = {};
  var style3 = {};
  var style4 = {};
  var style5 = {};
  var style6 = {};
  var style7 = {};
  var style8 = {};
  return (
    <div>
      <>
        <div class="modal fade" id="searchModal" tabindex="-1">
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content" style={style1}>
              <div className="modal-header border-0">
                <button
                  type="button"
                  className="btn bg-white btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body d-flex align-items-center justify-content-center">
                <div className="input-group" style={{ maxWidth: 600 }}>
                  <input
                    type="text"
                    className="form-control bg-transparent border-primary p-3"
                    placeholder="Type search keyword"
                  />
                  <button className="btn btn-primary px-4">
                    <i className="bi bi-search" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid facts py-5 pt-lg-0">
          <div className="container py-5 pt-lg-0">
            <div className="row gx-0">
              <div
                className="col-lg-4 wow zoomIn"
                data-wow-delay="0.1s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.1s",
                  animationName: "zoomIn",
                }}
              >
                <div
                  className="bg-primary shadow d-flex align-items-center justify-content-center p-4"
                  style={{ height: 150 }}
                >
                  <div
                    className="bg-white d-flex align-items-center justify-content-center rounded mb-2"
                    style={{ width: 60, height: 60 }}
                  >
                    <i className="fa fa-users text-primary" />
                  </div>
                  <div className="ps-4">
                    <h5 className="text-white mb-0">Happy Clients</h5>
                    <h1 className="text-white mb-0" data-toggle="counter-up">
                      12345
                    </h1>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 wow zoomIn"
                data-wow-delay="0.3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "zoomIn",
                }}
              >
                <div
                  className="bg-light shadow d-flex align-items-center justify-content-center p-4"
                  style={{ height: 150 }}
                >
                  <div
                    className="bg-primary d-flex align-items-center justify-content-center rounded mb-2"
                    style={{ width: 60, height: 60 }}
                  >
                    <i className="fa fa-check text-white" />
                  </div>
                  <div className="ps-4">
                    <h5 className="text-primary mb-0">Projects Done</h5>
                    <h1 className="mb-0" data-toggle="counter-up">
                      12345
                    </h1>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 wow zoomIn"
                data-wow-delay="0.6s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.6s",
                  animationName: "zoomIn",
                }}
              >
                <div
                  className="bg-primary shadow d-flex align-items-center justify-content-center p-4"
                  style={{ height: 150 }}
                >
                  <div
                    className="bg-white d-flex align-items-center justify-content-center rounded mb-2"
                    style={{ width: 60, height: 60 }}
                  >
                    <i className="fa fa-award text-primary" />
                  </div>
                  <div className="ps-4">
                    <h5 className="text-white mb-0">Win Awards</h5>
                    <h1 className="text-white mb-0" data-toggle="counter-up">
                      12345
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};
