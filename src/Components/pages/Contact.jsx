import React, { useRef, useState, useContext } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { AuthContext } from "../../main";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";

const Contact = () => {
  const form = useRef();
  const [formValid, setFormValid] = useState(true);
  const { isAuthorized, user } = useContext(AuthContext);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current.checkValidity()) {
      setFormValid(false);
      toast.error("Please fill out all required fields correctly.");
      return;
    }

    emailjs
      .sendForm("service_gq8s9dl", "template_3bg2lij", form.current, {
        publicKey: "bmaNn1S6DbgDKAGYe",
      })
      .then(
        () => {
          toast.success("Mail sent successfully!");
          form.current.reset();
          setFormValid(true);
        },
        (error) => {
          toast.error("oppps, something went wrong!", error.text);
        }
      );
  };

  return (
    <>
      {!isAuthorized ? (
        <div className="auth-err">
          <p>You need to Login to use this resource...</p>
        </div>
      ) : (
        <div className="job_post page">
          <div className="container">
            <p>Contact US</p>
            <div className="connect-container">
              <div className="connect-links">
                <a
                  href="https://www.linkedin.com/in/paras-pardhi-976b78292"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CiLinkedin /> Visit my LinkedIn profile
                </a>
                <a
                   href="https://github.com/parascool"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> Visit my GitHub profile
                </a>
              </div>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-container">
                <div className="wrapper-one">
                  <div className="input-tag">
                    <label htmlFor="name">Fullname : </label>
                    <div>
                      <input
                        type="text"
                        id="name"
                        name="from_name"
                        placeholder="your fullname"
                        required
                      />
                    </div>
                  </div>
                  <div className="input-tag">
                    <label htmlFor="email">Enter your valid e-mail : </label>
                    <div>
                      <input
                        type="email"
                        id="email"
                        name="from_email"
                        placeholder="your e-mail"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="wrapper-two">
                  <div className="input-tag text-area">
                    <label htmlFor="description">Description : </label>
                    <div>
                      <textarea
                        rows="10"
                        id="description"
                        name="message"
                        placeholder="enter your msg..."
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrapper-three">
                <button className="post-btn" type="submit" value="Send">
                  Post message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
