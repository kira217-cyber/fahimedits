import React from "react";
import { motion } from "framer-motion";
import { FaUserShield, FaLock, FaFileAlt, FaGlobe } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white max-w-7xl mx-auto px-6 py-12 sm:px-10 lg:px-20">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#7683FF] to-[#C77DFF] bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="text-gray-500 font-bold mt-3 text-sm md:text-base">
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
          <FaUserShield className="text-4xl text-[#7683FF]" />
          <p className="mt-2 text-sm font-medium text-gray-600">User Privacy</p>
        </div>
        <div className="flex flex-col items-center">
          <FaLock className="text-4xl text-[#C77DFF]" />
          <p className="mt-2 text-sm font-medium text-gray-600">
            Data Security
          </p>
        </div>
        <div className="flex flex-col items-center">
          <FaFileAlt className="text-4xl text-[#7683FF]" />
          <p className="mt-2 text-sm font-medium text-gray-600">Transparency</p>
        </div>
        <div className="flex flex-col items-center">
          <FaGlobe className="text-4xl text-[#C77DFF]" />
          <p className="mt-2 text-sm font-medium text-gray-600">
            Global Policy
          </p>
        </div>
      </motion.div>
      {/* Terms Article */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className=" p-6 md:p-10 rounded-3xl shadow-lg text-gray-600 font-medium text-[16px] leading-relaxed text-justify"
      >
        <p className="mb-4">
          <strong>FahimEdits</strong> (“we,” “us,” or “our”) provides
          video-editing services and respects your privacy. This policy explains
          how we collect, use, share, and protect personal information when you
          visit our website, contact us, or engage our services. When you submit
          a brief, request a quote, place an order, or communicate with us, you
          may share details such as your name, email, phone, company
          information, billing address, and project materials including scripts,
          raw footage, images, audio, brand assets, logos, and references. We
          also receive transaction confirmations from payment processors, but we
          do not store full card or bank details on our servers. When you use
          our website, certain technical data such as IP address, browser type,
          pages viewed, and timestamps may be collected automatically, and
          cookies or similar technologies may be used to remember preferences,
          measure performance, and improve the site. You can control cookies in
          your browser, noting that disabling some cookies may affect
          functionality.
        </p>
        <p className="mb-4">
          We use your information to set up projects, perform editing, manage
          revisions, deliver files, provide support, issue quotes and invoices,
          maintain accounting records, prevent fraud, improve quality, and
          comply with legal obligations. With your permission or as allowed by
          contract, we may display non-confidential snippets or thumbnails in
          our portfolio or social channels; if a non-disclosure agreement
          applies, we will abide by it. We do not sell personal information. We
          may share data with contracted service providers who host files, store
          data, process payments, provide email or CRM tools, offer project
          management, analytics, or subcontracted editing, and they are required
          to protect information and use it only under our instructions. We may
          disclose information if required by law, to protect rights and safety,
          or in connection with a business transfer such as a merger or
          acquisition, in which case this policy will continue to apply.
        </p>
        <p className="mb-4">
          Your data may be processed or stored outside your country, and where
          required we use appropriate safeguards for international transfers. We
          retain raw and project files for approximately thirty to sixty days
          after final delivery unless longer archival storage is purchased;
          deliverables and billing records may be kept longer to maintain
          service history and meet tax and audit requirements. We apply
          reasonable administrative, technical, and physical safeguards,
          including access controls and encryption where appropriate, although
          no system can be guaranteed fully secure. Depending on your location,
          you may have rights to access, correct, delete, restrict, or object to
          certain processing, to request a portable copy of your data, and to
          withdraw consent for optional uses; to exercise these rights, contact
          us at [email], and we may ask for verification before responding. Our
          services are not directed to children under the age of thirteen (or
          the applicable age of digital consent), and we do not knowingly
          collect data from children. Our website and deliveries may contain
          links to third-party sites that we do not control, and their privacy
          practices are governed by their own policies. We may update this
          Privacy Policy from time to time, and the effective date above shows
          when it was last revised; material changes may be highlighted on our
          website or by email where appropriate.
        </p>
      </motion.article>
    </div>
  );
};

export default PrivacyPolicy;
