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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Specify event type as React.ChangeEvent for input and textarea fields
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Specify event type as React.FormEvent for form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
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
        setLoading(false);
      } else {
        setError(data.error || "Something went wrong.");
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to send message.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl p-10">
        <h2 className="text-xl font-bold text-center">Contact Me</h2>

        {submitted ? (
          <div className="alert alert-success mt-4 text-center text-success-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>
              Thank you for your message! I&apos;ll be responding with your
              query shortly!
            </span>
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
              placeholder="I'd like to know more about your Standard plan..."
              className="textarea textarea-bordered w-full"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn btn-neutral">
              {!loading ? (
                "Send Message"
              ) : (
                <span className="loading loading-spinner loading-md items-center justify-center text-center"></span>
              )}
            </button>

            {error && <div className="alert alert-error mt-2">{error}</div>}
            <div className="text-center">
              <p>You can also contact me thru:</p>
              <a
                href="https://www.linkedin.com/in/jean-damien-magdangal-221a2a17b/"
                target="__blank"
                className="btn btn-ghost btn-circle"
              >
                <FaLinkedin className="hover:text-gray-400" size={24} />
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
