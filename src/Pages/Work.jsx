import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router";
import { FaWhatsapp } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";
import { HiCheck } from "react-icons/hi";
import VideoPlayer from "../Components/VideoPlayer/VideoPlayer";
import { categories, findCategory, INCLUDED, PHONE } from "../pricing.data";

/** এক ক্যাটাগরির কাজ — বড় ভিডিও, নিচে ছোটগুলো, পাশে দাম */
const Work = () => {
  const { slug } = useParams();
  const cat = findCategory(slug);
  const [active, setActive] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(0);
    document.title = cat
      ? `${cat.name} editing — from $${cat.price} | FahimEdits`
      : "Not found | FahimEdits";
  }, [cat]);

  if (!cat) {
    return (
      <section className="px-5 py-24 text-center">
        <h1 className="text-2xl font-extrabold text-gray-900">
          That category does not exist
        </h1>
        <Link to="/">
          <button className="mt-6 min-h-12 cursor-pointer rounded-full bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] px-7 text-sm font-bold text-white">
            Back to home
          </button>
        </Link>
      </section>
    );
  }

  const brief = [
    "Hi Fahim — I'd like a quote.",
    `Category: ${cat.name}`,
    `Listed price: $${cat.price}`,
  ].join("\n");
  const waHref = `https://wa.me/${PHONE}?text=${encodeURIComponent(brief)}`;
  const others = categories.filter((c) => c.slug !== cat.slug);

  return (
    <section className="bg-white px-4 py-10 sm:px-8 md:px-16 md:py-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="px-1"
        >
          <Link
            to="/#pricing"
            className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-gray-600 transition hover:text-gray-900"
          >
            <GoArrowLeft size={16} />
            All categories
          </Link>

          <div className="mt-3 flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl">
              {cat.name}
            </h1>
            <span className="rounded-full bg-[#3F6FDB] bg-gradient-to-r from-[#3F6FDB] to-[#7C4DDB] px-4 py-1.5 text-lg font-extrabold text-white shadow-md">
              ${cat.price}
            </span>
          </div>
          <p className="mt-3 max-w-xl leading-relaxed text-gray-600">
            {cat.long}
          </p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_1fr] lg:gap-8">
          <div className="min-w-0">
            {/* বড় ভিডিও */}
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-gray-200 bg-white p-2.5"
            >
              <VideoPlayer
                file={cat.videos[active].file}
                posterAt={1}
                maxHeight="24rem"
                rounded="rounded-xl"
              />
              <p className="mt-2.5 px-1 text-base font-extrabold text-gray-900 sm:text-lg">
                {cat.videos[active].title}
              </p>
            </motion.div>

            {/* বাকিগুলো — ক্লিক করলে উপরে বসে */}
            <div className="mt-3 grid grid-cols-2 gap-3 sm:gap-4">
              {cat.videos.map((v, i) =>
                i === active ? null : (
                  <button
                    key={v.file}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Play ${v.title}`}
                    className="cursor-pointer rounded-2xl border border-gray-200 bg-white p-2 text-left transition hover:border-[#C9D4F5]"
                  >
                    <VideoPlayer
                      file={v.file}
                      posterAt={1}
                      frameRatio={1}
                      rounded="rounded-lg"
                      compact
                      noControls
                      posterOnly
                      hint
                    />
                    <span className="mt-2 line-clamp-1 block px-0.5 text-sm font-bold text-gray-900">
                      {v.title}
                    </span>
                  </button>
                )
              )}
            </div>
          </div>

          {/* দামের প্যানেল */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl bg-[#2B3A8F] bg-gradient-to-br from-[#2B3A8F] via-[#3F2E8F] to-[#1E1B4B] p-6 text-white sm:p-7">
              <p className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em]">
                {cat.tag}
              </p>
              <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
                {cat.name}
              </h2>
              <p className="mt-3 text-6xl font-extrabold leading-none tracking-tight sm:text-7xl">
                <span className="align-super text-3xl font-bold sm:text-4xl">
                  $
                </span>
                {cat.price}
              </p>
              <p className="mt-2 text-sm text-white/65">per finished video</p>

              <ul className="mt-5 space-y-2.5 border-t border-white/20 pt-5">
                {INCLUDED.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <HiCheck className="mt-0.5 shrink-0 text-[#9FC0FF]" size={17} />
                    <span className="text-white/90">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={waHref}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-7 block"
              >
                <button className="flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-bold text-[#2B3A8F] transition hover:bg-gray-100">
                  <FaWhatsapp size={17} />
                  Book on WhatsApp
                </button>
              </a>
            </div>
          </aside>
        </div>

        {/* বাকি ক্যাটাগরি */}
        <div className="mt-12 px-1">
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-[#2F3A8C]">
            Other work
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {others.map((c) => (
              <Link
                key={c.slug}
                to={`/work/${c.slug}`}
                className="inline-flex min-h-10 items-center gap-2 rounded-full border border-gray-200 px-4 text-sm font-semibold text-gray-900 transition hover:border-[#4E8EFF]"
              >
                {c.name}
                <span className="text-xs font-bold text-gray-500">
                  ${c.price}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
