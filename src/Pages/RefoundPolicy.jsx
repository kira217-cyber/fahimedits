import React from "react";
import { motion } from "framer-motion";
import { FiRefreshCcw, FiDollarSign, FiClock, FiMail } from "react-icons/fi";

const RefoundPolicy = () => {
  return (
    <div className="bg-white max-w-7xl mx-auto min-h-screen py-12 px-4 md:px-10 lg:px-20">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#7683FF] to-[#C77DFF] bg-clip-text text-transparent">
          Refund Policy
        </h1>
        <p className="text-gray-500 mt-3 font-bold text-sm md:text-base">
          Effective Date: September 17, 2025
        </p>
      </motion.div>

      {/* Icon Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center mb-12"
      >
        <div className="flex flex-col items-center">
          <FiRefreshCcw className="text-4xl text-[#7683FF]" />
          <p className="mt-2 text-sm font-medium text-gray-600">Rework First</p>
        </div>
        <div className="flex flex-col items-center">
          <FiDollarSign className="text-4xl text-[#C77DFF]" />
          <p className="mt-2 text-sm font-medium text-gray-600">Partial Refund</p>
        </div>
        <div className="flex flex-col items-center">
          <FiClock className="text-4xl text-[#7683FF]" />
          <p className="mt-2 text-sm font-medium text-gray-600">Timeline Based</p>
        </div>
        <div className="flex flex-col items-center">
          <FiMail className="text-4xl text-[#C77DFF]" />
          <p className="mt-2 text-sm font-medium text-gray-600">Contact Us</p>
        </div>
      </motion.div>

  
      {/* Policy Article */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="bg-white backdrop-blur-md p-6 md:p-10 rounded-3xl shadow-lg text-gray-600 font-medium text-[16px] leading-relaxed text-justify"
      >
        <p className="mb-4">
          At <strong>FahimEdits</strong>, we deliver professional video-editing
          services and apply a rework-first approach. If a delivery does not
          reasonably match the approved brief, we will prioritize corrections
          within the included revision rounds. If, after good-faith attempts, we
          still cannot meet the agreed scope, we may offer a partial refund or
          service credit at our discretion. Preference-based changes, new
          concepts, or edits requiring new footage are outside the original
          scope and are not refundable.
        </p>

        <p className="mb-4">
          If you cancel after work has begun, fees for completed work, logged
          editing hours, and third-party costs (such as stock footage, music
          licenses, voice-over, subtitles, or subcontractor fees) are
          non-refundable; any remaining prepaid balance, if applicable, may be
          returned or credited. If you cancel before work starts and no
          production expenses have been incurred, up to fifty percent (50%) of
          the deposit may be refunded; otherwise the deposit is non-refundable.
          Technically sound final deliveries that later become unusable due to
          platform policy changes, copyright claims outside our control, or
          client-side limitations are not eligible for refunds; technical
          delivery issues are resolved through re-delivery or file replacement.
        </p>

        <p className="mb-4">
          Timelines are set by mutual agreement. Delays caused by late
          materials, approvals, or instructions from the client do not qualify
          for refunds or fee reductions. In the event of a significant delay
          clearly attributable to us (excluding force majeure), we may offer a
          reasonable fee reduction or credit. To request a refund, you must
          email us within seven (7) days of delivery with your order number, a
          clear reason, and relevant examples. We typically review requests
          within five to ten business days and may propose revisions. Approved
          refunds are processed within seven to ten business days to the
          original payment method or as account credit where applicable.
        </p>

        <p className="mb-4">
          Please contact us to resolve concerns before initiating a chargeback;
          unfounded chargebacks will be disputed with evidence of delivery,
          approvals, and revision logs. We are not liable for delays or failure
          to perform resulting from events beyond our control (including natural
          disasters, power or internet outages, or system failures). This policy
          is governed by the laws of Bangladesh (unless otherwise agreed in
          writing) and may be updated at any time; the latest version posted on
          our website or invoice takes effect upon publication.
        </p>
      </motion.article>
    </div>
  );
};

export default RefoundPolicy;
