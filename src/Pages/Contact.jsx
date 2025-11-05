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
  const [uploadProgress, setUploadProgress] = useState(0);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  // ✅ ভিডিও ফাইল সিলেকশন চেক
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    if (!selectedFile.type.startsWith("video/")) {
      toast.error("Please select a video file!", { theme: "colored" });
      return;
    }

    const maxSize = 100 * 1024 * 1024; // 100MB
    if (selectedFile.size > maxSize) {
      toast.error("Video too large! Max 100MB allowed.", { theme: "colored" });
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

  // ✅ ভিডিও Cloudinary তে সরাসরি আপলোড
  const uploadToCloudinary = async () => {
    try {
      const sigRes = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/signature`
      );
      const { timestamp, signature, cloudName, apiKey } = sigRes.data;

      const formData = new FormData();
      formData.append("file", file);
      formData.append("api_key", apiKey);
      formData.append("timestamp", timestamp);
      formData.append("signature", signature);
      formData.append("folder", "videos");

      const uploadRes = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/video/upload`,
        formData,
        {
          onUploadProgress: (progressEvent) => {
            const percent = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(percent);
          },
        }
      );

      return uploadRes.data.secure_url;
    } catch (error) {
      console.error("Cloudinary Upload Error:", error);
      toast.error("Video upload failed!", { theme: "colored" });
      throw error;
    }
  };

  // ✅ Submit Function
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
    let videoUrl = "";

    try {
      if (file) {
        toast.info("Uploading video to Cloudinary...", { theme: "colored" });
        videoUrl = await uploadToCloudinary();
      }

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          firstName,
          lastName,
          email,
          subject,
          message,
          videoUrl,
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
      setUploadProgress(0);
      document.querySelector('input[type="file"]').value = "";
    } catch (error) {
      console.error("Submit error:", error);
      toast.error("Failed to submit. Please try again.", { theme: "colored" });
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

            {/* File Input */}
            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Video File (Max 100MB)
              </label>
              <input
                type="file"
                accept="video/*"
                onChange={handleFileChange}
                className="w-full bg-white/20 text-gray-100 p-2 rounded-md border border-white/30 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-[#4E8EFF] file:to-[#A072FF] file:text-white hover:file:opacity-90 cursor-pointer"
              />
              {uploadProgress > 0 && (
                <div className="w-full bg-gray-600/50 rounded-md mt-2">
                  <div
                    className="bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] text-xs text-center text-white p-0.5 rounded-md"
                    style={{ width: `${uploadProgress}%` }}
                  >
                    {uploadProgress}%
                  </div>
                </div>
              )}
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

        {/* Right Info */}
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

// ✅ Helper for social icon
const SocialIcon = ({ Icon, url }) => (
  <a href={url} target="_blank" rel="noreferrer">
    <div className="w-10 h-10 flex items-center justify-center border border-white/40 rounded-full hover:bg-gradient-to-r hover:from-[#4E8EFF] hover:to-[#A072FF] transition">
      <Icon />
    </div>
  </a>
);

export default Contact;
