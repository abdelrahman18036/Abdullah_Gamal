import React, { useEffect, useRef, useState } from "react";
import {
  FaRegAddressBook,
  FaRegEnvelope,
  FaRegUser,
  FaRegMap,
} from "react-icons/fa";
import shapeOne from "../../assets/shape-1.png";
import axios from "axios";

import "./contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const handleScroll = () => {
      const top = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top < windowHeight * 0.75) {
        setIsVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://sheet.best/api/sheets/4230f9e9-2d70-4913-ac8d-cd95d45c7f70",
        form
      )
      .then((response) => {
        console.log(response);
        setForm({ name: "", email: "", subject: "", message: "" });
      });
  };

  return (
    <section
      ref={sectionRef}
      className={`contact section ${isVisible ? "fade-in" : ""}`}
      id="contact"
    >
      <h2 className="section_title text-cs">Contact Me</h2>
      <p className="section_subtitle">
        Let's <span>Talk About Ideas </span>
      </p>

      <div className="contact_container container grid">
        <div className="contact_content">
          <div className="contact_card">
            <span className="contact_card_icon">
              <FaRegMap />
            </span>
            <h3 className="contact_card_title">Address</h3>
            <p className="contact_card_data">Cairo, Egypt</p>
          </div>

          <div className="contact_card">
            <span className="contact_card_icon">
              <FaRegUser />
            </span>
            <h3 className="contact_card_title">Freelance</h3>
            <p className="contact_card_data">Available Right Now </p>
          </div>

          <div className="contact_card">
            <span className="contact_card_icon">
              <FaRegEnvelope />
            </span>
            <h3 className="contact_card_title">Email</h3>
            <p className="contact_card_data">abdallhagamal17@gmail.com</p>
          </div>

          <div className="contact_card">
            <span className="contact_card_icon">
              <FaRegAddressBook />
            </span>
            <h3 className="contact_card_title">Phone</h3>
            <p className="contact_card_data">+20 01123347691</p>
          </div>
        </div>

        <form className="contact_form" onSubmit={handleSubmit}>
          <div className="contact_form_group grid">
            <div className="contact_form_div">
              <label className="contact_form_tag text-cs">
                Your Full Name <b>*</b>
              </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={form.name}
                className="contact_form_input"
              />
            </div>

            <div className="contact_form_div">
              <label className="contact_form_tag text-cs">
                Your Email Address <b>*</b>
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={form.email}
                className="contact_form_input"
              />
            </div>
          </div>

          <div className="contact_form_div">
            <label className="contact_form_tag text-cs">
              Your Subject <b>*</b>
            </label>
            <input
              type="text"
              name="subject"
              onChange={handleChange}
              value={form.subject}
              className="contact_form_input"
            />
          </div>

          <div className="contact_form_div contact_form_area">
            <label className="contact_form_tag text-cs">
              Your Message <b>*</b>
            </label>
            <textarea
              name="message"
              onChange={handleChange}
              value={form.message}
              className="contact_form_input"
            ></textarea>
          </div>

          <div className="contact_submit">
            <p>* Accept the terms conditions.</p>
            <button type="submit" className="btn text-cs">
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="section_deco deco_left">
        <img src={shapeOne} alt="Image" className="shape" />
      </div>

      <div className="section_bg_wrapper">
        <span className="bg_title">Contact Me </span>
      </div>
    </section>
  );
}

export default Contact;
