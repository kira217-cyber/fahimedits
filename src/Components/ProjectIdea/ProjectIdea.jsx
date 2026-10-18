import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaWhatsapp } from "react-icons/fa";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";
import { HiCheck } from "react-icons/hi";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { categories, INCLUDED, PHONE, findCategory } from "../../pricing.data";

/**
 * দামের সেকশন — price.fahimedits.com এর মতো:
 * বাঁয়ে ভিডিও সহ ক্যাটাগরির কার্ড, ডানে দামের প্যানেল।
 * কার্ডে ক্লিক করলে ডান পাশের দাম বদলায়, "See work" ভিতরের পেজে নেয়।
 * রঙ ও ফন্ট মূল সাইটেরই।
 */
const ProjectIdea = () => {
  const [active, setActive] = useState(categories[0].slug);
  const cat = findCategory(active);

  const brief = [
    "Hi Fahim — I'd like a quote.",
    `Category: ${cat.name}`,
    `Listed price: $${cat.price}`,
  ].join("\n");
  const waHref = `https://wa.me/${PHONE}?text=${encodeURIComponent(brief)}`;

  return (
    <section
      id="pricing"
      className="overflow-x-clip bg-white py-16 sm:px-8 md:px-16 md:py-28 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="rounded-full border border-gray-200 bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text px-4 py-1 text-lg font-medium leading-tight text-transparent">
            Start Your Project
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            No Hidden{" "}
            <span className="bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text leading-tight text-transparent">
              Fees.
            </span>
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            Just Clear, Upfront Pricing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_1fr] lg:gap-8">
          {/* বাঁয়ে — ভিডিও সহ কার্ড */}
          <div
            role="radiogroup"
            aria-label="Pick a category"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5"
          >
            {categories.map((c, i) => {
              const on = c.slug === active;
              return (
                <motion.div
                  key={c.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.35, delay: Math.min(i * 0.04, 0.2) }}
                  className={`rounded-2xl border p-2.5 transition ${
                    on
                      ? "border-[#4E8EFF] bg-[#F2F6FF] bg-gradient-to-br from-[#F2F6FF] to-[#F6F2FF] shadow-md"
                      : "border-gray-200 bg-white hover:border-[#C9D4F5]"
                  }`}
                >
                  <VideoPlayer
                    file={c.videos[0].file}
                    posterAt={1}
                    frameRatio={1}
                    rounded="rounded-xl"
                    compact
                    posterOnly
                    hint
                  />

                  <button
                    type="button"
                    role="radio"
                    aria-checked={on}
                    onClick={() => setActive(c.slug)}
                    className="mt-3 block w-full cursor-pointer px-1 text-left"
                  >
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#2F3A8C]">
                      {c.tag}
                    </span>
                    <span className="mt-1.5 flex items-start justify-between gap-3">
                      <span className="text-xl font-bold leading-tight text-gray-900">
                        {c.name}
                      </span>
                      <span className="shrink-0 rounded-full border border-[#C9D4F5] bg-white px-3 py-1 text-sm font-extrabold text-[#2F3A8C]">
                        ${c.price}
                      </span>
                    </span>
                    <span className="mt-1 block text-sm text-gray-600">
                      {c.blurb}
                    </span>
                  </button>

                  <Link
                    to={`/work/${c.slug}`}
                    className="mt-2.5 inline-flex min-h-9 items-center gap-1 px-1 text-xs font-bold text-[#2F3A8C] transition hover:gap-1.5"
                  >
                    See work
                    <GoArrowUpRight size={14} />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* ডানে — দামের প্যানেল */}
          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <div className="rounded-2xl bg-[#2B3A8F] bg-gradient-to-br from-[#2B3A8F] via-[#3F2E8F] to-[#1E1B4B] p-6 text-white sm:p-7">
              <p className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em]">
                {cat.tag}
              </p>
              <h3 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
                {cat.name}
              </h3>
              <p
                aria-live="polite"
                className="mt-3 text-6xl font-extrabold leading-none tracking-tight sm:text-7xl"
              >
                <span className="align-super text-3xl font-bold sm:text-4xl">
                  $
                </span>
                {cat.price}
              </p>
              <p className="mt-2 text-sm text-white/65">per finished video</p>

              <p className="mt-5 border-t border-white/20 pt-5 text-sm leading-relaxed text-white/90">
                {cat.long}
              </p>

              <ul className="mt-5 space-y-2.5">
                {INCLUDED.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <HiCheck className="mt-0.5 shrink-0 text-[#9FC0FF]" size={17} />
                    <span className="text-white/90">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-col gap-2.5">
                <a href={waHref} target="_blank" rel="noreferrer noopener" className="block">
                  <button className="flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-bold text-[#2B3A8F] transition hover:bg-gray-100">
                    <FaWhatsapp size={17} />
                    Book on WhatsApp
                  </button>
                </a>
                <Link to={`/work/${cat.slug}`} className="block">
                  <button className="flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-white/35 px-5 text-sm font-semibold text-white transition hover:border-white">
                    See the work
                    <GoArrowRight />
                  </button>
                </Link>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default ProjectIdea;
