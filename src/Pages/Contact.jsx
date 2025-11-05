import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RiYoutubeFill } from "react-icons/ri";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isAnimated, setIsAnimated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  // ✅ ফর্ম সাবমিট
  const handleSubmit = async () => {
    if (!firstName || !lastName || !email || !subject || !message) {
      toast.error("Fill in all fields!", { theme: "colored" });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email!", { theme: "colored" });
      return;
    }

    setIsLoading(true);

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, {
        firstName,
        lastName,
        email,
        subject,
        message,
      });

      toast.success("Message Send Successfully!", { theme: "colored" });

      // ফর্ম রিসেট
      setFirstName("");
      setLastName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      toast.error("Message Send Error!", { theme: "colored" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen overflow-hidden py-2">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dhrnufiiz/video/upload/v1762292329/videos/uub3lyaevwetnbvlaczh.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[6px]"></div>

      {/* Main Content */}
      <div
        className="relative w-[95%] md:w-[90%] lg:w-[75%] bg-white/20 backdrop-blur-2xl border border-white/30 rounded-3xl shadow-2xl p-6 md:p-10 flex flex-col md:flex-row gap-6"
        style={{
          opacity: isAnimated ? 1 : 0,
          transform: isAnimated ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        {/* Left Form */}
        <div className="w-full md:w-1/2 text-white">
          <h2 className="text-3xl font-bold mb-4">GET IN TOUCH!</h2>
          <h3 className="text-xl font-semibold text-gray-200 mb-3">
            Share Your Idea
          </h3>

          <div className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name *"
                className="w-full bg-white/20 text-white placeholder-gray-300 p-3 rounded-md border border-white/30 focus:outline-none focus:border-white/60 transition"
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name *"
                className="w-full bg-white/20 text-white placeholder-gray-300 p-3 rounded-md border border-white/30 focus:outline-none focus:border-white/60 transition"
              />
            </div>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email *"
              className="w-full bg-white/20 text-white placeholder-gray-300 p-3 rounded-md border border-white/30 focus:outline-none focus:border-white/60 transition"
            />

            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject *"
              className="w-full bg-white/20 text-white placeholder-gray-300 p-3 rounded-md border border-white/30 focus:outline-none focus:border-white/60 transition"
            />

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message *"
              className="w-full bg-white/20 text-white placeholder-gray-300 p-3 rounded-md border border-white/30 focus:outline-none focus:border-white/60 transition h-32 resize-none"
            />

            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className={`w-full font-bold py-3 rounded-md transition-all ${
                isLoading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] hover:opacity-90 cursor-pointer"
              } text-white`}
            >
              {isLoading ? "Message Sending..." : "Send Message"}
            </button>
          </div>
        </div>

        {/* Right Info */}
        <div className="w-full md:w-1/2 text-gray-100">
          <h3 className="text-xl font-semibold text-white mb-3">
            Find Us Online
          </h3>
          <div className="flex gap-4">
            <SocialIcon
              Icon={FaFacebookF}
              url="https://www.facebook.com/rahmanfahim34"
            />
            <SocialIcon
              Icon={FaInstagram}
              url="https://www.instagram.com/fahim_rolling"
            />
            <SocialIcon
              Icon={FaLinkedinIn}
              url="https://www.linkedin.com/in/Rahmanfahim34/"
            />
            <SocialIcon
              Icon={RiYoutubeFill}
              url="https://www.youtube.com/@FahimEdits2"
            />
          </div>
        </div>
      </div>

      <ToastContainer position="top-right" />
    </div>
  );
};

// ✅ Social Icon
const SocialIcon = ({ Icon, url }) => (
  <a href={url} target="_blank" rel="noreferrer">
    <div className="w-10 h-10 flex items-center justify-center border border-white/40 rounded-full hover:bg-gradient-to-r hover:from-[#4E8EFF] hover:to-[#A072FF] transition">
      <Icon />
    </div>
  </a>
);

export default Contact;
