import Link from "next/link";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <section
        className="hero-wrap hero-wrap-2"
        style={{ backgroundImage: "url('/images/bg_4.jpg')" }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 pt-5 text-center">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <Link href="index">
                    Home <i className="fa fa-chevron-right"></i>
                  </Link>
                </span>{" "}
                <span>
                  Contact <i className="fa fa-chevron-right"></i>
                </span>
              </p>
              <h1 className="mb-0 bread">Contact us</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row no-gutters justify-content-center">
            <div className="col-md-12">
              <div className="wrapper">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="contact-wrap w-100 p-md-5 p-4">
                      <h3>Contact us</h3>
                      <p className="mb-4">
                        We're open for any suggestion or just to have a chat
                      </p>
                      <div className="row mb-4">
                        <div className="col-md-4">
                          <div className="dbox w-100 d-flex align-items-start">
                            <div className="text">
                              <p>
                                <span>Address:</span> 198 West 21th Street,
                                Suite 721 New York NY 10016
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="dbox w-100 d-flex align-items-start">
                            <div className="text">
                              <p>
                                <span>Email:</span>{" "}
                                <Link href="https://preview.colorlib.com/cdn-cgi/l/email-protection#dbb2b5bdb49ba2b4aea9a8b2afbef5b8b4b6">
                                  <span
                                    className="__cf_email__"
                                    data-cfemail="157c7b737a556c7a6067667c61703b767a78"
                                  >
                                    [email&#160;protected]
                                  </span>
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="dbox w-100 d-flex align-items-start">
                            <div className="text">
                              <p>
                                <span>Phone:</span>{" "}
                                <Link href="tel://1234567920">
                                  + 1235 2355 98
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <form
                        id="contactForm"
                        name="contactForm"
                        className="contactForm"
                      >
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                id="name"
                                placeholder="Name"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea
                                name="message"
                                className="form-control"
                                id="message"
                                cols={30}
                                rows={4}
                                placeholder="Create a message here"
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="submit"
                                value="Send Message"
                                className="btn btn-primary"
                              />
                              <div className="submitting"></div>
                            </div>
                          </div>
                        </div>
                      </form>
                      <div className="w-100 social-media mt-5">
                        <h3>Follow us here</h3>
                        <p>
                          <Link href="contact">Facebook</Link>
                          <Link href="contact">Twitter</Link>
                          <Link href="contact">Instagram</Link>
                          <Link href="contact">Dribbble</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-stretch">
                    <div id="map" className="bg-white"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;