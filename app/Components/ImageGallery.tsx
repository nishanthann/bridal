"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/* ---------------- IMAGES (PUBLIC FOLDER) ---------------- */

const columnImages = [
  // Column 1 (3 images)
  ["/13.jpg", "/8.jpg", "/3.jpeg"],

  // Column 2 (3 images)
  ["/15.jpg", "/10.jpeg", "/16.jpg"],

  // Column 3 (3 images - center-ish)
  ["/14.jpg", "/14.jpeg", "/17.jpg"],

  // Column 4 (2 images)
  ["/18.jpg", "/19.jpg", "/6.jpg"], // You can add more images here
];

/* ---------------- ANIMATIONS ---------------- */

// Container animation
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Column-based animations for 4 columns
const col1Item = {
  hidden: { opacity: 0, x: -50, y: -20 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.8, easing: [0.16, 1, 0.3, 1] },
  },
};

const col2Item = {
  hidden: { opacity: 0, x: -30, y: 20 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.85, easing: [0.16, 1, 0.3, 1] },
  },
};

const col3Item = {
  hidden: { opacity: 0, x: 30, y: -20 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.85, easing: [0.16, 1, 0.3, 1] },
  },
};

const col4Item = {
  hidden: { opacity: 0, x: 50, y: 20 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.8, easing: [0.16, 1, 0.3, 1] },
  },
};

const variantsByColumn = [col1Item, col2Item, col3Item, col4Item];

/* ---------------- COMPONENT ---------------- */

const Gallery = () => {
  return (
    <section className="w-full py-16 md:py-20 overflow-hidden">
      {/* Title */}
      <div className="mx-auto max-w-5xl text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Explore our <span className="text-rose-600">Gallery</span>
        </h2>
        <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
          A glimpse of our bridal transformations and signature looks
        </p>
      </div>

      {/* Masonry Grid - 4 columns with reduced width */}
      <div className="mx-auto max-w-5xl px-2 sm:px-4 lg:px-0">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          {columnImages.map((images, col) => (
            <div key={col} className="flex flex-col gap-3 md:gap-5">
              {images.map((src, i) => (
                <motion.div
                  key={i}
                  variants={variantsByColumn[col]}
                  className={`
                    relative w-full overflow-hidden rounded-xl md:rounded-2xl
                    ${col === 1 || col === 3 ? (i === 1 ? "md:mt-6" : "") : ""}
                    ${col === 0 || col === 2 ? (i === 0 ? "md:mt-8" : "") : ""}
                  `}
                >
                  <Image
                    src={src}
                    alt="Bridal makeup gallery image"
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, (max-width: 1024px) 22vw, 22vw"
                  />
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* View All Button */}
      <div className="mt-10 md:mt-12 flex justify-center">
        <Link
          href="#"
          className="group inline-flex items-center gap-2 rounded-full border border-rose-600/60 bg-rose-600/10 px-6 py-3 text-sm font-medium text-rose-400 transition-all duration-300 hover:bg-rose-600 hover:text-white hover:border-rose-600 hover:scale-105"
        >
          View All
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </section>
  );
};

export default Gallery;
