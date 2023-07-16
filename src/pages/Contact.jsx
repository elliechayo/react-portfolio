import { useState } from "react";
import "../styles/Contact.css";

import {
  MdOutlineAccountCircle,
  MdOutlineAlternateEmail,
} from "react-icons/md";

export default function Contact() {
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateEmail = (str) => {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      str
    );
  };

  const handleInputChange = (event) => {
    const elemName = event.target.name;
    const val = event.target.value.trim();
    if (!val) {
      setErrors({
        ...errors,
        [elemName]: `${elemName} cannot be empty`,
      });
    } else {
      setErrors({ ...errors, [elemName]: "" });
      if (elemName === "email" && !validateEmail(val)) {
        setErrors({ ...errors, [elemName]: "Invalid email address" });
      }
    }
  };

  return (
    <section className="section contact-section">
      <h2 className="section-title">Get in touch</h2>
      <ul className="contact-info">
        <li>
          <h3>Call</h3>
          <p>917-715-6084</p>
        </li>
        <li>
          <h3>Email</h3>
          <a href="mailto:elliechayo@gmail.com">elliechayo@gmail.com</a>
        </li>
        <li>
          <h3>Follow</h3>
          <a href="https://github.com/elliechayo">Github</a>
        </li>
      </ul>
      <form className="contact-form">
        <div className="formgroup">
          <MdOutlineAccountCircle fontSize={22} />
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            onChange={handleInputChange}
          />
        </div>
        {errors.name && <p className="input-error">{errors.name}</p>}
        <div className="formgroup">
          <MdOutlineAlternateEmail fontSize={22} />
          <input
            type="text"
            placeholder="Email Address"
            required
            name="email"
            onChange={handleInputChange}
          />
        </div>
        {errors.email && <p className="input-error">{errors.email}</p>}
        <div className="formgroup">
          <textarea
            rows={5}
            placeholder="Message"
            onChange={handleInputChange}
            name="message"
            required
          ></textarea>
        </div>
        {errors.message && <p className="input-error">{errors.message}</p>}
        <button className="submit-btn">Let's Talk</button>
      </form>
    </section>
  );
}