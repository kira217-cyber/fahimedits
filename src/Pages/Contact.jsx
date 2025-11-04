import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaCircle,
} from "react-icons/fa";
import { RiYoutubeFill } from "react-icons/ri";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [isAnimated, setIsAnimated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  const handleSubmit = async () => {
    if (!firstName || !lastName || !email || !subject || !message) {
      toast.error("Please fill in all required fields!", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("subject", subject);
    if (file) formData.append("file", file);
    formData.append("message", message);

    try {
      const response = await axios.post(
        "http://localhost:5005/api/contact",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      toast.success(
        <div>
          <strong>Success!</strong>
          <br />
          Your form has been submitted successfully!
          {response.data.videoUrl && (
            <span>
              <br />
              <a
                href={response.data.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View Video
              </a>
            </span>
          )}
        </div>,
        {
          position: "top-right",
          autoClose: 10000,
          theme: "colored",
        }
      );

      // Reset form
      setFirstName("");
      setLastName("");
      setEmail("");
      setSubject("");
      setFile(null);
      setMessage("");
    } catch (error) {
      toast.error("Error submitting form. Please try again!", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen overflow-hidden py-2">
      {/* 🎥 Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dhrnufiiz/video/upload/v1762292329/videos/uub3lyaevwetnbvlaczh.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      ></video>

      {/* 🧊 Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[6px]"></div>

      {/* 🌟 Main Content */}
      <div
        className="relative w-[95%] md:w-[90%] lg:w-[75%] bg-white/20 backdrop-blur-2xl border border-white/30 rounded-3xl shadow-2xl p-6 md:p-10 flex flex-col md:flex-row gap-6"
        style={{
          opacity: isAnimated ? 1 : 0,
          transform: isAnimated ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        {/* Left: Form */}
        <div className="w-full md:w-1/2 text-white">
          <h2 className="text-3xl font-bold text-white mb-4">GET IN TOUCH!</h2>
          <h3 className="text-xl font-semibold text-gray-200 mb-3">
            Share Your Idea
          </h3>

          <div className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                className="w-full md:w-1/2 bg-white/20 text-white placeholder-gray-300 p-2 rounded-md border border-white/30 focus:outline-none"
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                className="w-full md:w-1/2 bg-white/20 text-white placeholder-gray-300 p-2 rounded-md border border-white/30 focus:outline-none"
              />
            </div>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full bg-white/20 text-white placeholder-gray-300 p-2 rounded-md border border-white/30 focus:outline-none"
            />

            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              className="w-full bg-white/20 text-white placeholder-gray-300 p-2 rounded-md border border-white/30 focus:outline-none"
            />

            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Choose Video File
              </label>
              <input
                type="file"
                accept="video/*"
                onChange={handleFileChange}
                className="w-full bg-white/20 text-gray-100 placeholder-gray-300 p-2 rounded-md border border-white/30 focus:outline-none"
              />
              <span className="text-gray-300 text-sm">
                {file ? file.name : "No file chosen"}
              </span>
            </div>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              className="w-full bg-white/20 text-white placeholder-gray-300 p-2 rounded-md border border-white/30 focus:outline-none h-24"
            />

            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className={`w-full bg-gradient-to-r cursor-pointer from-[#4E8EFF] to-[#A072FF] text-white font-bold py-2 rounded-md ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Please Wait Sending..." : "Send"}
            </button>
          </div>
        </div>

        {/* Right: Info */}
        <div className="w-full md:w-1/2 text-gray-100">
          <h3 className="text-xl font-semibold  text-white mb-3">
            Our Response Times
          </h3>
          <ul className="space-y-2 mb-5 text-gray-300">
            <li>📅 Monday–Friday: 1–3 hours</li>
            <li>🕐 Weekends & Holidays: 12–24 hours</li>
          </ul>
          <p className="text-gray-300 mb-3">
            We are based in +6 GMT and available from 9am – 6pm.
          </p>
          <p className="text-gray-300 mb-3">
            We’re a small team, so response time may vary — but for urgent
            issues, we get back ASAP!
          </p>

          <h3 className="text-xl font-semibold text-white mb-3">
            Find Us Online
          </h3>
          <div className="flex items-center gap-4">
            <a target="blank" href="https://www.facebook.com/rahmanfahim34">
              <div className="w-10 h-10 flex items-center justify-center border border-white/40 rounded-full hover:bg-gradient-to-r hover:from-[#4E8EFF] hover:to-[#A072FF] transition">
                <FaFacebookF />
              </div>
            </a>
            <a target="blank" href="https://www.instagram.com/fahim_rolling">
              <div className="w-10 h-10 flex items-center justify-center border border-white/40 rounded-full hover:bg-gradient-to-r hover:from-[#4E8EFF] hover:to-[#A072FF] transition">
                <FaInstagram />
              </div>
            </a>
            <a target="blank" href="https://www.linkedin.com/in/Rahmanfahim34/">
              <div className="w-10 h-10 flex items-center justify-center border border-white/40 rounded-full hover:bg-gradient-to-r hover:from-[#4E8EFF] hover:to-[#A072FF] transition">
                <FaLinkedinIn />
              </div>
            </a>
            <a target="blank" href="https://www.youtube.com/@FahimEdits2">
              <div className="w-10 h-10 flex items-center justify-center border border-white/40 rounded-full hover:bg-gradient-to-r hover:from-[#4E8EFF] hover:to-[#A072FF] transition">
                <RiYoutubeFill />
              </div>
            </a>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Contact;
