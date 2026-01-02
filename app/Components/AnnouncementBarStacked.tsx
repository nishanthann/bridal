// components/CompactAnnouncementBar.jsx
"use client";

import { useState, useEffect } from "react";
import { Phone, Mail, Instagram, Facebook, X, Sparkles } from "lucide-react";

const announcements = [
  "⚠️ Only 3 wedding dates left for This Month! Secure your date today.",
  "✨ Pre-Wedding Bridal Trials: Book 2, Get 1 Free! Limited slots available.",
  "⏰ Early Bird Offer: Book 6+ months in advance & save 25% on bridal package!",
  "💆‍♀️ Pro Tip: Start your bridal skincare routine at least 3 months before the wedding!",
];

export default function CompactAnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-linear-to-l from-rose-700 to-black/90 text-white text-xs">
      <div className="container mx-auto px-3">
        <div className="flex items-center justify-between py-1.5">
          {/* Left: Phone & Email (Mobile icons only, desktop text) */}
          <div className="flex items-center sm:space-x-4">
            <a
              href="tel:+94776103470"
              className="flex items-center space-x-1.5 hover:text-rose-200 transition-colors group"
              title="Call us"
            >
              <Phone
                size={11}
                className="shrink-0 group-hover:scale-110 transition-transform "
              />
              <span className="hidden sm:inline font-medium">+94776103470</span>
            </a>

            <div className="h-3 w-px bg-rose-600" />

            <a
              href="mailto:hayathiri1311@gmail.com"
              className="flex items-center space-x-1.5 hover:text-rose-200 transition-colors group ml-1"
              title="Email us"
            >
              <Mail
                size={11}
                className="shrink-0 group-hover:scale-110 transition-transform"
              />
              <span className="hidden sm:inline font-medium">
                hayathiri1311@gmail.com
              </span>
            </a>
            <div className=" flex items-center space-x-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-rose-200 hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-rose-200 hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                <Facebook size={14} />
              </a>
            </div>
          </div>

          {/* Center: Rotating Announcements */}
          <div className="flex-1 flex items-center justify-center mx-2 min-w-0">
            <Sparkles size={10} className="mr-1.5 text-amber-300 shrink-0" />

            <div className="relative h-4 overflow-hidden flex-1">
              <div
                className="absolute inset-0 transition-transform duration-300 ease-in-out"
                style={{ transform: `translateY(-${currentIndex * 100}%)` }}
              >
                {announcements.map((text, idx) => (
                  <div
                    key={idx}
                    className="h-4 flex items-center justify-center w-full"
                  >
                    <span className="truncate font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicators */}
            <div className="hidden xs:flex items-center space-x-0.5 ml-2">
              {announcements.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-1 h-1 rounded-full ${
                    idx === currentIndex ? "bg-white" : "bg-white/30"
                  }`}
                  aria-label={`Announcement ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Social Media & Close */}
          <div className="flex items-center space-x-2 ">
            {/* Social Media Icons - Hide on smallest screens */}

            <div className="h-3 w-px bg-rose-600" />

            <button
              onClick={() => setIsVisible(false)}
              className="hover:bg-rose-700 p-0.5 rounded transition-colors ml-1"
              aria-label="Close announcement"
            >
              <X size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
