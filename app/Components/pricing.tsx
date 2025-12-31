"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Check, Sparkles, Heart, Crown, Star, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

/* ---------------- TYPES ---------------- */

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  tag: string;
  link: string;
  highlight?: boolean;
  icon?: React.ReactNode;
};

/* ---------------- DATA ---------------- */

export const pricingPlans: PricingPlan[] = [
  {
    name: "Birthday Makeup",
    price: "25,000 LKR",
    description: "Glamorous makeup for your special birthday event.",
    features: [
      "Natural or glam look",
      "Up to 3 hours service",
      "Touch-up kit included",
      "Perfect for your big day",
    ],
    cta: "Book Now",
    link: "tel:+94776103470",
    tag: "Party Look",
    icon: <Star className="h-4 w-4" />,
  },
  {
    name: "Puberty Ceremony Makeup",
    price: "60,000 LKR",
    description:
      "Graceful and age-appropriate makeup for a memorable puberty ceremony.",
    features: [
      "Traditional or modern look",
      "Up to 4 hours service",
      "Hair styling included",
      "Perfect for small ceremonies",
    ],
    cta: "Book Now",
    link: "tel:+94776103470",
    tag: "Ceremony Special",
    icon: <Heart className="h-4 w-4" />,
  },
  {
    name: "Reception Look",
    price: "100,000 LKR",
    description:
      "Elegant reception makeup for the bride. Radiant and long-lasting.",
    features: [
      "Full face makeup",
      "Hair styling with accessories",
      "6 hours service duration",
      "Touch-up kit provided",
    ],
    cta: "Book Now",
    link: "tel:+94776103470",
    tag: "Bridal Package",
    highlight: true,
    icon: <Sparkles className="h-4 w-4 fill-amber-500 text-amber-400" />,
  },
  {
    name: "Full Wedding Face Makeup",
    price: "150,000 LKR",
    description:
      "Flawless bridal makeup for your special day with lasting finish.",
    features: [
      "Complete bridal makeup",
      "Professional hair styling",
      "8 hours service duration",
      "Pre-wedding consultation",
    ],
    cta: "Book Now",
    link: "tel:+94776103470",
    tag: "Premium Bridal",
    icon: <Crown className="h-4 w-4" />,
  },
  {
    name: "Full Wedding Makeup with Trial",
    price: "200,000 LKR",
    description:
      "Complete bridal package with trial session for perfect results.",
    features: [
      "Pre-wedding trial session",
      "Full wedding day makeup",
      "Professional hair styling",
      "10 hours service duration",
      "Emergency touch-up kit",
    ],
    cta: "Book Now",
    link: "tel:+94776103470",
    tag: "Ultimate Package",
    highlight: true,
    icon: <Award className="h-5 w-5 fill-amber-500 " />,
  },
];

/* ---------------- COMPONENT ---------------- */

interface PricingProps {
  plans?: PricingPlan[];
  className?: string;
}

const MakeupPricing = ({ plans = pricingPlans, className }: PricingProps) => {
  return (
    <section id="price" className={cn("w-full py-20", className)}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.9 }}
        className="text-center mb-20 px-4"
      >
        <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
          <span className="relative z-10 text-gray-100">
            Bridal & Makeover Packages
            <span
              className="bg-rose-500 absolute bottom-1 left-0 -z-10 h-px w-full"
              aria-hidden="true"
            ></span>
          </span>
        </h2>

        <p className="text-neutral-400 max-w-2xl mx-auto mt-3">
          Choose the perfect makeup package for your special occasion. All
          prices are negotiable.
        </p>
      </motion.div>

      {/* Pricing grid */}
      <div className="mx-auto max-w-7xl px-14">
        <div className="grid md:grid-cols-3 gap-10 mb-16 mx-auto">
          {plans.slice(0, 3).map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {plans.slice(3).map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- CARD ---------------- */

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
  className?: string;
}

const PricingCard = ({ plan, index, className }: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1.2, delay: index * 0.05 }}
      className={cn(
        "relative flex flex-col rounded-2xl p-5 min-h-110 overflow-hidden",
        "bg-neutral-900",
        "shadow-md shadow-black/40",
        "transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-lg hover:shadow-black/60",
        plan.highlight &&
          "shadow-lg shadow-rose-500/20 bg-linear-to-br from-gray-500/30 to-transparent",
        className
      )}
    >
      {/* Highlight badge */}
      {plan.highlight && (
        <div className="absolute top-10 -right-19 rotate-45">
          <span className="bg-rose-600/30 text-white px-20 py-1 text-[11px] font-semibold shadow-md">
            Most Popular
          </span>
        </div>
      )}

      {/* Tag + icon */}
      <div className="flex items-center justify-between mb-3">
        <span className="bg-rose-500/10 text-rose-500 px-3 py-1 rounded-full text-[11px] font-medium">
          {plan.tag}
        </span>
        <span className="text-rose-400">{plan.icon}</span>
      </div>

      {/* Title & price */}
      <div className="mb-3">
        <h3 className="text-lg font-semibold text-neutral-100 mb-1">
          {plan.name}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-rose-500">{plan.price}</span>
          <span className="text-[11px] text-neutral-500">Negotiable</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
        {plan.description}
      </p>

      {/* Features */}
      <div className="flex-1 mb-5">
        <PricingFeatures features={plan.features} />
      </div>

      {/* CTA */}
      <a href={plan.link}>
        <Button
          className={cn(
            "w-full py-4 text-sm font-semibold rounded-xl transition-all duration-300",
            // default button style
            "bg-neutral-800 text-neutral-200 hover:bg-neutral-700",
            // highlight ONLY for most popular
            plan.highlight &&
              "bg-rose-600/30 text-white hover:bg-rose-500/30 shadow-md shadow-rose-500/30"
          )}
        >
          {plan.cta}
        </Button>
      </a>
    </motion.div>
  );
};

/* ---------------- FEATURES ---------------- */

interface PricingFeaturesProps {
  features: string[];
  className?: string;
}

const PricingFeatures = ({ features, className }: PricingFeaturesProps) => {
  return (
    <ul className={cn("space-y-2", className)}>
      {features.map((feature) => (
        <li key={feature} className="flex items-start gap-2">
          <span className="mt-1 rounded-full bg-rose-500/10 p-1">
            <Check className="h-3 w-3 text-rose-400" />
          </span>
          <span className="text-[13px] text-neutral-300">{feature}</span>
        </li>
      ))}
    </ul>
  );
};

export default MakeupPricing;
