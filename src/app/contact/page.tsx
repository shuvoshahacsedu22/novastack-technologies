"use client";
import Link from "next/link";
import { useState } from "react";
interface ValidationErrors{
    name?: string;
    email?: string;
    message?: string;
}
const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validate = () => {
    const newErrors:ValidationErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e:any) => {
    
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }
  };
  return (
    <div className="w-full p-8 max-w-3xl mx-auto flex flex-col gap-12">
      {/* Page Title */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
        <p className="text-gray-600 text-lg">
          We’d love to hear from you! Send us a message and we’ll get back soon.
        </p>
      </section>

      {/* Success Message */}
      {submitted && (
        <div className="p-4 bg-green-100 text-green-700 rounded-2xl text-center font-semibold">
          Your message has been sent successfully!
        </div>
      )}

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            className="w-full p-3 rounded-2xl border"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full p-3 rounded-2xl border"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block font-medium mb-1">Message</label>
          <textarea
            
            className="w-full p-3 rounded-2xl border"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-2xl text-lg font-semibold shadow hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>

      {/* Social / Contact Links */}
      <section className="text-center flex flex-col gap-2 mt-6">
        <p className="text-gray-700">
          <strong>Email:</strong> contact@company.com
        </p>
        <p className="text-gray-700">
          <strong>Phone:</strong> +1 234 567 890
        </p>
        <div className="flex justify-center gap-4 mt-2">
          <Link href="/" className="underline">
            Facebook
          </Link>
          <Link href="/" className="underline">
            Twitter
          </Link>
          <Link href="/" className="underline">
            LinkedIn
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
