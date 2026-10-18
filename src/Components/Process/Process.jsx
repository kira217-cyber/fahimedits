import React from "react";
import { motion } from "framer-motion";

/**
 * উল্লম্ব টাইমলাইন — বাঁয়ে নম্বরের গোল, পাশে শিরোনাম ও বিবরণ।
 * গঠনটা fahimedits.net এর মতো, কিন্তু রঙ ও ফন্ট মূল সাইটেরই
 * (নীল → বেগুনি গ্রেডিয়েন্ট, সাদা পটভূমি)।
 */
const Process = () => {
  const steps = [
    {
      no: "01",
      title: "Send Brief & Footage",
      body: "Drop your raw files on Google Drive, Dropbox or WeTransfer — whatever you already use. A short note on the style is enough to get started.",
    },
    {
      no: "02",
      title: "Receive & Review",
      body: "The first cut lands in your inbox with a review link. Leave your notes right on the timeline and request adjustments if anything needs changing.",
    },
    {
      no: "03",
      title: "Download",
      body: "Final export in any format and size you need — ready to publish, with project files handed over on request.",
    },
  ];

  return (
    <section
      id="process"
      className="overflow-hidden bg-white py-16 sm:px-8 md:px-16 md:py-32 lg:px-24"
    >
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="rounded-full border border-gray-200 bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text px-4 py-1 text-lg font-medium leading-tight text-transparent">
            Simple Process
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-snug text-gray-900 md:text-5xl">
            Shoot &amp; Send,{" "}
            <span className="bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text leading-tight text-transparent">
              That&rsquo;s It
            </span>
          </h2>
        </motion.div>

        <ol className="relative mt-14 space-y-10">
          {/* গোলগুলোর মাঝ বরাবর উল্লম্ব রেখা */}
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-[1.375rem] top-6 w-px bg-gradient-to-b from-[#4E8EFF] to-[#A072FF] opacity-30"
          />

          {steps.map((step, index) => (
            <motion.li
              key={step.no}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative flex gap-5 sm:gap-6"
            >
              <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#3F6FDB] bg-gradient-to-br from-[#3F6FDB] to-[#7C4DDB] text-sm font-semibold text-white shadow-md">
                {step.no}
              </span>
              <div className="pt-1.5">
                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  {step.body}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
