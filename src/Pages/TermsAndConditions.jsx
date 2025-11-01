import React from "react";
import { motion } from "framer-motion";
import { FiFileText, FiCheckCircle, FiShield, FiClock } from "react-icons/fi";

const TermsAndConditions = () => {
  return (
    <div className="bg-white max-w-7xl mx-auto min-h-screen py-12 md:px-10 lg:px-20">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text text-transparent">
          Terms & Conditions
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
          <FiFileText className="text-4xl text-[#4E8EFF]" />
          <p className="mt-2 text-sm font-medium text-gray-600">Agreements</p>
        </div>
        <div className="flex flex-col items-center">
          <FiCheckCircle className="text-4xl text-[#A072FF]" />
          <p className="mt-2 text-sm font-medium text-gray-600">Revisions</p>
        </div>
        <div className="flex flex-col items-center">
          <FiShield className="text-4xl text-[#4E8EFF] " />
          <p className="mt-2 text-sm font-medium text-gray-600">Security</p>
        </div>
        <div className="flex flex-col items-center">
          <FiClock className="text-4xl text-[#A072FF]" />
          <p className="mt-2 text-sm font-medium text-gray-600">Timelines</p>
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
          By requesting or purchasing our video-editing services, you (“Client”)
          agree to these Terms & Conditions with <strong>FahimEdits</strong>
          (“we,” “us,” “our”). Our services include, as agreed in a quote or
          order confirmation, editing, trimming, color correction/grading, audio
          cleanup, titles/graphics, subtitles, transitions, and basic visual
          effects. The scope of work is limited to what is specified in writing;
          any additions or changes requested after approval of the quote or
          brief will be treated as a change request and may affect pricing and
          timelines. You are responsible for supplying a clear brief and all
          necessary materials (scripts, raw footage, voice-overs, brand assets,
          licensed music, fonts, logos, and references) in a timely manner, and
          you warrant that you own or have valid licenses to use all materials
          you provide; you agree to indemnify us against claims arising from
          unauthorized or infringing content and, upon request, to provide proof
          of rights.
        </p>
        <p className="mb-4">
          Fees are as quoted per project or package. Unless otherwise stated, an
          advance payment is required to commence work, and the remaining
          balance is due before final delivery; we may pause work or delivery
          for overdue invoices. Prices exclude taxes and third-party costs
          unless expressly included. Each project includes up to two rounds of
          reasonable revisions aimed at aligning the edit with the approved
          brief; additional revisions, new concepts, or edits requiring new
          footage are outside scope and billed separately. Delivery timelines
          are estimated once we receive the complete brief and materials; rush
          delivery may be offered for an additional fee. We deliver in the
          format, resolution, and codec specified in the order. Upon delivery,
          you should review files promptly and request any included revisions
          within the agreed window.
        </p>
        <p className="mb-4">
          All deliverables remain our property until full payment is received.
          After full payment, you receive a non-exclusive right to use the final
          deliverables for the purposes described in the quote or order.
          Editable project files (for example, Premiere Pro or After Effects
          projects, third-party template files, or working assets) are not
          included unless explicitly purchased, and any additional licensing
          terms for third-party assets will apply. Unless an NDA or written
          restriction is agreed in advance, you grant us permission to display
          non-confidential excerpts, thumbnails, or descriptions of completed
          work in our portfolio, website, or social channels for promotional
          purposes.
        </p>
        <p className="mb-4">
          We treat client information as confidential and apply reasonable
          administrative, technical, and physical safeguards; however, no system
          is completely secure. Raw and project files are typically retained for
          approximately 30–60 days after final delivery and may then be deleted;
          longer archival storage can be arranged for a fee.
        </p>
        <p className="mb-4">
          We may refuse projects or content that is illegal, hateful,
          pornographic, or otherwise violates applicable laws or platform
          policies, or where rights cannot be verified. Cancellations and
          refunds are governed by our separate Refund Policy, which forms part
          of these Terms. Our liability to you is limited to the total fees paid
          for the specific project giving rise to the claim, and we are not
          liable for indirect, incidental, or consequential damages. These Terms
          are governed by the laws of Bangladesh.
        </p>
      </motion.article>
    </div>
  );
};

export default TermsAndConditions;
