import React from "react";
import { motion } from "framer-motion";
import { FaLock, FaGlobe, FaChartPie, FaCoins, FaRocket, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "A Secure Platform for ICO & Cryptocurrency Trade",
    items: [
      { icon: <FaCoins />, title: "Variety of Currencies", desc: "Easily trade a wide range of digital assets securely." },
      { icon: <FaLock />, title: "Crypto as Collateral", desc: "Use your crypto holdings as secure collateral." },
    ],
    image: "https://i.ibb.co.com/PqR82LL/6520394817eee978a2d3c3bf-video-editing-pc.jpg",
  },
  {
    id: 2,
    title: "Scalable, Fast and Ultra Secure Transactions",
    items: [
      { icon: <FaRocket />, title: "Simple Process", desc: "Quick, safe and hassle-free crypto transactions." },
      { icon: <FaGlobe />, title: "Available Worldwide", desc: "Access your wallet and trade from anywhere globally." },
    ],
    image: "https://i.ibb.co.com/Ld8GY5RH/Lightworks-Create-Computer-Setup-Video-Editing-Software-2.webp",
  },
  {
    id: 3,
    title: "Powerful and Absolutely Secure Tokenization",
    items: [
      { icon: <FaShieldAlt />, title: "Reliable and Safe", desc: "We use cutting-edge encryption for asset protection." },
      { icon: <FaChartPie />, title: "Realtime Updates", desc: "Track your tokens and prices in real-time securely." },
    ],
    image: "https://i.ibb.co.com/XZzKHnnq/685be7dcd32275d38306790c-Blog-Cover-2023-04-Video-Editing-Tutorial-for-Beginners-101-Video-Editor-Gu.webp",
  },
];

const Process = () => {
  return (
    <section className="bg-white text-black py-10 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-10`}
          >
            {/* Image Section */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold  bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text text-transparent leading-tight">
                {feature.title}
              </h2>

              <div className="space-y-5">
                {feature.items.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text text-transparent leading-tight border border-gray-200 sm:items-center gap-4  p-4 rounded-xl transition-all duration-300"
                  >
                    <div className="text-[#4E8EFF] text-3xl">{item.icon}</div>
                    <div className="text-left">
                      <h4 className="font-bold bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text text-transparent leading-tight text-lg mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-700">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Process;
