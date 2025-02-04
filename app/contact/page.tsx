"use client";

import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Failed to send message.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl p-6">
        <h2 className="text-xl font-bold text-center">Contact Me</h2>

        {submitted ? (
          <div className="alert alert-success mt-4 text-center text-success-content">
            Message sent successfully!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="textarea textarea-bordered w-full"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
            {error && <div className="alert alert-error mt-2">{error}</div>}
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
