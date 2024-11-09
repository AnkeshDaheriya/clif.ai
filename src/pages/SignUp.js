import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Alert from "react-bootstrap/Alert";

const Result = () => {
  return (
    <Alert variant="success" className="success-msg">
      Your Message has been successfully sent.
    </Alert>
  );
};

const SignUp = () => {
  const form = useRef();

  const [result, showresult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yj5dgzp",
        "template_hfduayo",
        form.current,
        "WLENsTkBytC0yvItS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
    showresult(true);
  };

  setTimeout(() => {
    showresult(false);
  }, 5000);

  return (
    <>
      <div className="section section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6">
              <div className="contact-form-box shadow-box ">
                <h3 className="title text-center">Sign Up</h3>
                <h5 className="text-center">
                  Already a member? <Link to="">Sign In</Link>
                </h5>
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="axil-contact-form">
                  <div className="row ">
                    <div className=" col-lg-6">
                      <div className="form-group">
                        <label>First name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First name"
                          name="firstname"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>Last name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last name"
                          name="lastname"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Email address*</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="name@gmail.com"
                      name="email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Password*</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="******"
                      name="password"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <button
                      type="submit"
                      className="axil-btn btn-fill-primary btn-fluid btn-primary"
                      name="submit-btn">
                      Sing Up
                    </button>
                  </div>
                  <div className="form-group">{result ? <Result /> : null}</div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
