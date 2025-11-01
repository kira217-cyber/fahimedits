import React, { useState, useEffect } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaTimes } from "react-icons/fa";
import { RiYoutubeFill } from "react-icons/ri";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // টোস্টের CSS

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [isAnimated, setIsAnimated] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // নতুন লোডিং স্টেট

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  const handleSubmit = async () => {
    // ফর্ম ভ্যালিডেশন
    if (!firstName || !lastName || !email || !subject || !message) {
      toast.error('Please fill in all required fields!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    setIsLoading(true); // লোডিং শুরু

    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('subject', subject);
    if (file) formData.append('file', file); // ফাইল থাকলে অ্যাড করুন
    formData.append('message', message);

    try {
      const response = await axios.post('http://localhost:5004/api/contact', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setFile(null); // সফল হলে ফাইল স্টেট null করা
      toast.success(
        <div>
          <strong>Success!</strong><br />
          Your form has been submitted successfully!<br />
          {response.data.videoUrl && (
            <span>Video link: <a href={response.data.videoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View Video</a></span>
          )}
        </div>,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
      // ফর্ম রিসেট
      setFirstName('');
      setLastName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      toast.error('Error submitting form. Please try again!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } finally {
      setIsLoading(false); // লোডিং শেষ
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-8">
      <div
        className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row"
        style={{
          opacity: isAnimated ? 1 : 0,
          transform: isAnimated ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
        }}
      >
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text text-transparent leading-tight mb-4 text-center md:text-left">GET IN TOUCH!</h2>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Share Your Idea</h3>
          <p className="text-gray-600 mb-6">For any issues or queries, please use the form below:</p>
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  placeholder="Name"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  placeholder="Name"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Subject"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Choose Video File</label>
              <input
                type="file"
                accept="video/*"
                onChange={handleFileChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
              <span className="text-gray-500">{file ? file.name : 'No file chosen'}</span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md h-24"
                placeholder="Message"
              />
            </div>
            <button
              className={`w-full cursor-pointer bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] text-white p-2 rounded-md font-bold ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={handleSubmit}
              disabled={isLoading} // লোডিংয়ের সময় বোতাম ডিসেবল
            >
              {isLoading ? 'Loading...' : 'Send'}
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text text-transparent leading-tight mb-4">Here Our Usual Response Times</h3>
          <ul className="text-gray-600 space-y-2 mb-6">
            <li className="flex items-center">
              <span className="w-4 h-4 bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] text-white rounded-full mr-2"></span>
              Monday – Friday: 1-3 hours
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] text-white rounded-full mr-2"></span>
              Weekends & Holidays: 12-24 hours
            </li>
          </ul>
          <p className="text-gray-600 mb-4">
            Our team is based in the +5:30 GMT timezone and available from 9am – 6am Monday to Friday.
          </p>
          <p className="text-gray-600 mb-4">
            We are a small team and encourage our staff to have time off which is why we expect slightly slower response times but on urgent issues, we get back ASAP.
          </p>
          <h3 className="text-xl font-semibold bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text text-transparent leading-tight mb-4">Find Us Online</h3>
          <div className="flex items-center gap-4">
            <div className="w-10 cursor-pointer h-10 flex items-center justify-center bg-transparent border border-gray-600 rounded-full hover:bg-gradient-to-r hover:from-[#4E8EFF] hover:to-[#A072FF] transition hover:text-white ">
              <FaFacebookF />
            </div>
            <div className="w-10 cursor-pointer h-10 flex items-center justify-center bg-transparent border border-gray-600 rounded-full hover:bg-gradient-to-r hover:from-[#4E8EFF] hover:to-[#A072FF] transition hover:text-white ">
              <FaInstagram />
            </div>
            <div className="w-10 cursor-pointer h-10 flex items-center justify-center bg-transparent border border-gray-600 rounded-full hover:bg-gradient-to-r hover:from-[#4E8EFF] hover:to-[#A072FF] transition hover:text-white ">
              <FaLinkedinIn />
            </div>
            <div className="w-10 cursor-pointer h-10 flex items-center justify-center bg-transparent border border-gray-600 rounded-full hover:bg-gradient-to-r hover:from-[#4E8EFF] hover:to-[#A072FF] transition hover:text-white ">
              <RiYoutubeFill />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer /> {/* টোস্ট কন্টেইনার যোগ করুন */}
    </div>
  );
};

export default Contact;