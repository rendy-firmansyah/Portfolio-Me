"use client";

import HeroSection from "./HeroSection";
import imageContact from "../../../public/assets/contact.jpg";
import { Phone, MailIcon, HouseIcon } from "lucide-react";
import emailjs from "emailjs-com";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Contact() {
  const [form, setForm] = useState({
    email: "",
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_no1c14i", //service id
        "template_7hqus5s", //template id
        {
          email: form.email,
          subject: form.subject,
          description: form.description,
          to_email: "rendy.firmans28@gmail.com",
        },
        "cTdpHatqsMmWMxk_0" //public key account
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Pesan Terkirim!",
            text: "Terima kasih, pesan Anda telah berhasil dikirim.",
            confirmButtonColor: "#16a34a",
          });
          setForm({ email: "", subject: "", description: "" });
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Gagal Mengirim",
            text: "Terjadi kesalahan, silakan coba lagi.",
            confirmButtonColor: "#dc2626",
          });
          console.error(error);
        }
      );
  };

  return (
    <div className="min-h-screen p-6 sm:p-10">
      <HeroSection title="Contact Me Now!" bgImage={imageContact} />

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-5">
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <p className="text-gray-300">
            Feel free to reach out for collaboration, project inquiries, or just
            to say hi.
          </p>

          <div className="space-y-3">
            <div>
              <div className="flex items-center gap-2">
                <HouseIcon size={20} />
                <h3 className="font-semibold">Address</h3>
              </div>
              <p className="text-gray-400">
                Sumbergondo Village, Glenmore District, Banyuwangi Regency, East
                Java.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <MailIcon size={20} />
                <h3 className="font-semibold">Email</h3>
              </div>
              <p className="text-gray-400">rendy.firmans28@gmail.com</p>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <Phone size={20} />
                <h3 className="font-semibold">Phone</h3>
              </div>
              <p className="text-gray-400">+62 856-4840-8330</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={sendEmail}
          className="bg-black p-6 rounded-lg space-y-4 shadow-lg"
        >
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-1 w-full p-2 rounded bg-gray-950 border border-gray-800 text-white focus:outline-none focus:border-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Subject</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Enter subject"
              className="mt-1 w-full p-2 rounded bg-gray-950 border border-gray-800 text-white focus:outline-none focus:border-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Write your message..."
              rows="4"
              className="mt-1 w-full p-2 rounded bg-gray-950 border border-gray-800 text-white focus:outline-none focus:border-green-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 transition text-white py-2 rounded font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
