import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ProjectIdea = () => {
  const [videoType, setVideoType] = useState('Reels');
  const [rawFootage, setRawFootage] = useState('Under 30 min');
  const [cameraCount, setCameraCount] = useState('Single camera');
  const [editingPreference, setEditingPreference] = useState('Low');
  const [finalOutput, setFinalOutput] = useState(0);
  const [totalCost, setTotalCost] = useState(250.00);
  const [theme, setTheme] = useState('default');
  const [type, setType] = useState('Personal');

  // 💰 Real-time cost calculation
  useEffect(() => {
    let cost = 250.00;
    if (rawFootage === 'Over 2 hours') cost += 100;
    if (cameraCount === 'Multi-cam (2-3)') cost += 50;
    if (cameraCount === 'Multi-cam (4+)') cost += 100;
    if (editingPreference === 'High') cost += 75;
    cost += finalOutput * 2; // $2 per minute
    setTotalCost(cost);
  }, [rawFootage, cameraCount, editingPreference, finalOutput]);

  return (
    <div id="shot-send" className="min-h-screen bg-white flex flex-col items-center md:px-16 lg:px-24 py-16 md:py-32">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-12 max-w-3xl"
      >
        <span className="text-sm bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text text-transparent leading-tight border border-gray-200 px-4 py-1 rounded-full font-medium">
          Start Your Project
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4 leading-tight">
          No Hidden <span className="bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text text-transparent leading-tight">Fees.</span>
        </h1>
        <p className="mt-4 text-gray-700 md:text-lg">
          Just Clear, Upfront Pricing.
        </p>
      </motion.div>

      {/* Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="bg-white rounded-3xl shadow-lg w-full max-w-3xl p-8"
      >
        <div className="space-y-6">
          {/* Video Type */}
          <div>
            <label className="block text-sm md:text-lg font-bold  bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text text-transparent leading-tight">
              Video Type
            </label>
            <select
              className="mt-2 block font-bold w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-purple-300"
              value={videoType}
              onChange={(e) => setVideoType(e.target.value)}
            >
              <option>Reels</option>
              <option>Ecommerce Video</option>
              <option>Blog</option>
              <option>Commercial</option>
              <option>Talking Head</option>
              <option>Real Estate</option>
              <option>Cooking</option>
              <option>Fitness</option>
              <option>Automotive</option>
              <option>Weddings</option>
            </select>
          </div>

          {/* Raw Footage */}
          <div>
            <label className="block text-sm md:text-lg font-bold bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text text-transparent leading-tight">
              Amount of Raw Footage
            </label>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {['Under 30 min', '30-60 min', 'Over 2 hours'].map((option) => (
                <label key={option} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="rawFootage"
                    value={option}
                    checked={rawFootage === option}
                    onChange={(e) => setRawFootage(e.target.value)}
                    className="form-radio text-purple-500"
                  />
                  <span className="ml-2  text-gray-900 text-lg font-bold">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Camera Count */}
          <div>
            <label className="block text-sm md:text-lg font-bold bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text text-transparent leading-tight">
              Number of Cameras
            </label>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {['Single camera', 'Multi-cam (2-3)', 'Multi-cam (4+)'].map((option) => (
                <label key={option} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="cameraCount"
                    value={option}
                    checked={cameraCount === option}
                    onChange={(e) => setCameraCount(e.target.value)}
                    className="form-radio text-purple-500"
                  />
                  <span className="ml-2 text-gray-900 text-lg font-bold">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Editing Preference */}
          <div>
            <label className="block text-sm md:text-lg font-bold bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text text-transparent leading-tight">
              Editing Preference
            </label>
            <select
              className="mt-2 block w-full font-bold p-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-purple-300"
              value={editingPreference}
              onChange={(e) => setEditingPreference(e.target.value)}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          {/* Final Output */}
          <div>
            <label className="block text-sm md:text-lg font-bold bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text text-transparent leading-tight">
              Final Output (Minutes)
            </label>
            <input
              type="range"
              min="0"
              max="120"
              value={finalOutput}
              onChange={(e) => setFinalOutput(e.target.value)}
              className="w-full mt-2 accent-blue-500 text-lg font-bold"
            />
            <div className="mt-1 text-lg font-bold bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text text-transparent leading-tight">{finalOutput} min</div>
          </div>

          {/* Type */}
          <div>
            <label className="block text-sm md:text-lg font-bold bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text text-transparent leading-tight">
              Type
            </label>
            <select
              className="mt-2 block w-full p-3 border font-bold border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-purple-300"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option>Personal</option>
              <option>Business</option>
            </select>
          </div>

          {/* Total Cost */}
          <div>
            <label className="block text-sm md:text-lg font-bold bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text text-transparent leading-tight">
              Total USD
            </label>
            <div className="mt-2 border border-gray-200 font-bold bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text text-transparent leading-tight p-3 rounded-md text-center text-lg">
              ${totalCost.toFixed(2)}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectIdea;
