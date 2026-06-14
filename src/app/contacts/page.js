'use client';

import { useState } from "react";
import styles from "./page.module.css";
import Navbar from "@/app/components/Navbar";

export default function contacts() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", form);

    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div>
      <Navbar />
      
      <div className={styles.container}>
        <h1>Contact</h1>

      <p><strong>Email:</strong> gabysalas2005@outlook.com</p>
      <a href="https://www.linkedin.com/in/gabriela-santos-874576248/"><p><strong>LinkedIn:</strong> https://www.linkedin.com/in/gabriela-santos-874576248/</p></a>
      <p><strong>Location:</strong> La Jolla, California</p>
      <p><strong>Open to:</strong> Internships & UX opportunities</p>
        <h1>Contact Me</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send</button>
        </form>

        {submitted && <p className={styles.success}>Message sent!</p>}
      </div>
      
    </div>
  );
}