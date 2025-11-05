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
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [isAnimated, setIsAnimated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    // Check file type
    if (!selectedFile.type.startsWith("video/")) {
      toast.error("Please select a video file!", { theme: "colored" });
      return;
    }

    // Check file size (75MB = 75 * 1024 * 1024 bytes)
    const maxSize = 75 * 1024 * 1024;
    if (selectedFile.size > maxSize) {
      toast.error("Video too large! Max 75MB allowed.", { theme: "colored" });
      e.target.value = null;
      return;
    }

    setFile(selectedFile);
    toast.info(
      `Selected: ${selectedFile.name} (${(
        selectedFile.size /
        (1024 * 1024)
      ).toFixed(1)} MB)`,
      {
        autoClose: 3000,
        theme: "colored",
      }
    );
  };

  const handleSubmit = async () => {
    if (!firstName || !lastName || !email || !subject || !message) {
      toast.error("Please fill all required fields!", { theme: "colored" });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email!", { theme: "colored" });
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);
    if (file) formData.append("file", file);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          timeout: 300000, // 5 minutes
        }
      );

      toast.success(
        <div>
          <strong>Success!</strong>
          <br />
          Your message has been sent!
          {response.data.videoUrl && (
            <span>
              <br />
              <a
                href={response.data.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View Your Video
              </a>
            </span>
          )}
        </div>,
        { autoClose: 8000, theme: "colored" }
      );

      // Reset form
      setFirstName("");
      setLastName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setFile(null);
      document.querySelector('input[type="file"]').value = "";
    } catch (error) {
      console.error("Submit error:", error);

      if (error.response?.data?.error) {
        toast.error(error.response.data.error, { theme: "colored" });
      } else if (error.message.includes("timeout")) {
        toast.error("Upload taking too long. Try a smaller video.", {
          theme: "colored",
        });
      } else {
        toast.error("Failed to submit. Please try again.", {
          theme: "colored",
        });
      }
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

      {/* Glassmorphism Overlay */}
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

            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Video File (Max 75MB)
              </label>
              <input
                type="file"
                accept="video/*"
                onChange={handleFileChange}
                className="w-full bg-white/20 text-gray-100 p-2 rounded-md border border-white/30 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-[#4E8EFF] file:to-[#A072FF] file:text-white hover:file:opacity-90 cursor-pointer"
              />
              <p className="text-xs text-gray-300 mt-1">
                {file
                  ? `${file.name} (${(file.size / (1024 * 1024)).toFixed(
                      1
                    )} MB)`
                  : "No file chosen"}
              </p>
            </div>

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
              {isLoading ? "Sending... Please wait" : "Send Message"}
            </button>
          </div>
        </div>

        {/* Right: Info */}
        <div className="w-full md:w-1/2 text-gray-100">
          <h3 className="text-xl font-semibold text-white mb-3">
            Our Response Times
          </h3>
          <ul className="space-y-2 mb-5 text-gray-300">
            <li>Monday–Friday: 1–3 hours</li>
            <li>Weekends & Holidays: 12–24 hours</li>
          </ul>
          <p className="text-gray-300 mb-3">
            We are based in +6 GMT and available from 9am – 6pm.
          </p>
          <p className="text-gray-300 mb-6">
            We’re a small team, so response time may vary — but for urgent
            issues, we get back ASAP!
          </p>

          <h3 className="text-xl font-semibold text-white mb-3">
            Find Us Online
          </h3>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/rahmanfahim34"
              target="_blank"
              rel="noreferrer"
            >
              <div className="w-10 h-10 flex items-center justify-center border border-white/40 rounded-full hover:bg-gradient-to-r hover:from-[#4E8EFF] hover:to-[#A072FF] transition">
                <FaFacebookF />
              </div>
            </a>
            <a
              href="https://www.instagram.com/fahim_rolling"
              target="_blank"
              rel="noreferrer"
            >
              <div className="w-10 h-10 flex items-center justify-center border border-white/40 rounded-full hover:bg-gradient-to-r hover:from-[#4E8EFF] hover:to-[#A072FF] transition">
                <FaInstagram />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/Rahmanfahim34/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="w-10 h-10 flex items-center justify-center border border-white/40 rounded-full hover:bg-gradient-to-r hover:from-[#4E8EFF] hover:to-[#A072FF] transition">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://www.youtube.com/@FahimEdits2"
              target="_blank"
              rel="noreferrer"
            >
              <div className="w-10 h-10 flex items-center justify-center border border-white/40 rounded-full hover:bg-gradient-to-r hover:from-[#4E8EFF] hover:to-[#A072FF] transition">
                <RiYoutubeFill />
              </div>
            </a>
          </div>
        </div>
      </div>

      <ToastContainer position="top-right" />
    </div>
  );
};

export default Contact;
