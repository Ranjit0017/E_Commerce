import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "../Css/Footer.css"; // Assuming some basic styling is defined (optional)

const Footer = () => {
  return (
    <MDBFooter bgColor="dark" color="white" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block text-white ">
          <span>Get connected with us on social networks:</span>
        </div>

        <div className="border border-1">
          <a href="" className=" text-white me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer  className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase text-white fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Digitic Web
              </h6>
              <p className="text-white">
                This is Mern Stack Base WebApplication Running On Differnt Platform and 
                Provide Facalities to purchase And Do An Transaction of E-Commerce Site. 
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="text-white mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Electronics
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Cloths
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                    Home Products
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  More...
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="text-white mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="text-white mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
               Porbandar
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@shop.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 919876543210
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 910123456789
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4 text-white"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright:  
        <a className="text-white text-reset fw-bold ms-2" href="https://mdbootstrap.com/">
          Ranjit B Chavda
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
