import React from "react";
import { motion } from "framer-motion";
import { BsFillSendFill } from "react-icons/bs";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { RiFolderReceivedFill } from "react-icons/ri";
import gif1 from "../../assets/gif1.gif";
import gif2 from "../../assets/gif2.gif";
import gif3 from "../../assets/gif3.gif";

const Process = () => {
  // Scroll animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const features = [
    {
      id: 1,
      title: "1. Send Brief & Footage.",
      items: [
        { icon: <BsFillSendFill />, title: "Via Your Favourite Cloud Storage" },
      ],
      image: gif1,
    },
    {
      id: 2,
      title: "2. Receive & Review.",
      items: [
        {
          icon: <RiFolderReceivedFill />,
          title: "Request Adjustments If Needed",
        },
      ],
      image: gif2,
    },
    {
      id: 3,
      title: "3. Download.",
      items: [{ icon: <FaCloudDownloadAlt />, title: "In Any Format & Size" }],
      image: gif3,
    },
  ];

  return (
    <section
      id="process"
      className="py-16 md:py-32 md:px-16 lg:px-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 "
        >
          <span className="text-lg bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text text-transparent leading-tight border border-gray-200 px-4 py-1 rounded-full font-medium">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug mt-4">
            Shoot & Send, <br />{" "}
            <span className="bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text text-transparent leading-tight">
              {" "}
              That’s It
            </span>
          </h2>
        </motion.div>
      </div>
      <section>
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
                    className="w-80 h-60 md:w-[460px] md:h-[400px]"
                  />
                </div>
              </motion.div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
                <h2 className="text-2xl text-center sm:text-3xl md:text-4xl font-bold  bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text text-transparent leading-tight">
                  {feature.title}
                </h2>

                <div className="space-y-5">
                  {feature.items.map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center justify-center bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text text-transparent leading-tight sm:items-center gap-4  p-4 rounded-xl transition-all duration-300"
                    >
                      <div className="text-[#4E8EFF] text-3xl">{item.icon}</div>
                      <div className="text-center">
                        <h4 className="bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text text-transparent leading-tight text-lg mb-1">
                          {item.title}
                        </h4>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Process;
