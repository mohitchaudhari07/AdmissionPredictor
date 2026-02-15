import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", message: "Please fill out all fields." });
      return;
    }

    await axios.post(
      "http://localhost:3000/api/contact",
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      { withCredentials: true },
    );
    setStatus({
      type: "success",
      message: "Thanks — your message was sent (demo).",
    });
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-[#e6d3b3] via-[#d2b48c] to-[#a67c52] text-gray-900">
      <main className="flex-1">
        <section className="max-w-5xl mx-auto px-6 py-16 md:py-28">
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl font-extrabold">
                Get in touch
              </h1>
              <p className="mt-4 text-white/90 max-w-xl">
                Have a question, feedback, or want to collaborate? Fill the form
                and we'll get back to you. This form is a demo — hook it up to
                your backend or email provider to receive messages.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 text-white/90">
                <div>
                  <div className="font-bold">Email</div>
                  <div className="text-sm">chaudharymohit961@gmail.com</div>
                </div>
                <div>
                  <div className="font-bold">Place</div>
                  <div className="text-sm">Remote</div>
                </div>
              </div>
            </div>

            <div>
              <form
                onSubmit={handleSubmit}
                className="bg-white/95 rounded-xl p-6 shadow-lg"
                aria-label="Contact form"
              >
                <label className="block">
                  <span className="text-sm font-medium text-gray-700">
                    Name
                  </span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
                    required
                  />
                </label>

                <label className="block mt-4">
                  <span className="text-sm font-medium text-gray-700">
                    Email
                  </span>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
                    required
                  />
                </label>

                <label className="block mt-4">
                  <span className="text-sm font-medium text-gray-700">
                    Message
                  </span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
                    required
                  />
                </label>

                <div className="mt-6 flex items-center gap-4">
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-md bg-[#5b3b1f] text-white font-medium hover:opacity-95 transition"
                  >
                    Send message
                  </button>

                  {status && (
                    <div
                      role="status"
                      className={`text-sm ${status.type === "error" ? "text-red-600" : "text-green-700"}`}
                    >
                      {status.message}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Contact;
