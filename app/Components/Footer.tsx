"use client";

import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Camera,
  Sparkles,
} from "lucide-react";

export default function FooterGlow() {
  return (
    <footer className="w-full py-8">
      {/* Main footer container */}
      <div className="w-full">
        {/* Main footer content */}
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 rounded-2xl border border-white/10 bg-linear-to-br from-transparent to-rose-950/30 p-8 backdrop-blur-sm md:flex-row md:justify-between md:gap-12">
          {/* Left: Brand, Description & Contact */}
          <div className="flex flex-col md:flex-row md:gap-12 md:flex-1">
            {/* Brand & Description */}
            <div className="flex-1 mb-8 md:mb-0">
              <Link href="/" className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-rose-400 to-rose-700">
                  <Sparkles size={24} className="text-white" />
                </div>
                <div>
                  <h2 className="bg-linear-to-r from-rose-200 to-rose-400 bg-clip-text text-xl font-bold text-transparent">
                    SH Bridal
                  </h2>
                  <p className="text-xs text-white/60">Makeover & Beauty</p>
                </div>
              </Link>

              {/* Website Description */}
              <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-md">
                Specializing in exquisite bridal makeup and beauty
                transformations. We create stunning looks for your special day
                with personalized care and professional expertise.
              </p>

              {/* Social Media */}
              <div className="mt-6 flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="rounded-full bg-white/5 p-2 text-white/70 hover:bg-rose-500/20 hover:text-rose-300 transition-all"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="rounded-full bg-white/5 p-2 text-white/70 hover:bg-rose-500/20 hover:text-rose-300 transition-all"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  aria-label="Portfolio"
                  className="rounded-full bg-white/5 p-2 text-white/70 hover:bg-rose-500/20 hover:text-rose-300 transition-all"
                >
                  <Camera size={18} />
                </a>
              </div>
            </div>

            {/* Address & Contact Info Column */}
            <div className="flex-1">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-rose-400">
                Contact Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 text-rose-400" />
                  <div>
                    <p className="text-sm font-medium text-white/90">Address</p>
                    <p className="text-sm text-white/70">
                      Kopay, Jaffna, Sri Lanka
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-rose-400" />
                  <div>
                    <p className="text-sm font-medium text-white/90">Phone</p>
                    <a
                      href="tel:+94776103470"
                      className="text-sm text-white/70 hover:text-rose-300 transition-colors"
                    >
                      +94 77 610 3470
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-rose-400" />
                  <div>
                    <p className="text-sm font-medium text-white/90">Email</p>
                    <a
                      href="mailto:hayathiri1311@gmail.com"
                      className="text-sm text-white/70 hover:text-rose-300 transition-colors"
                    >
                      hayathiri1311@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Navigation Links */}
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            {/* Services */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-rose-400">
                Services
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/bridal"
                    className="text-sm text-white/70 hover:text-rose-300 transition-colors"
                  >
                    Bridal Makeup
                  </Link>
                </li>
                <li>
                  <Link
                    href="/trial"
                    className="text-sm text-white/70 hover:text-rose-300 transition-colors"
                  >
                    Trial Sessions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/family"
                    className="text-sm text-white/70 hover:text-rose-300 transition-colors"
                  >
                    Family Packages
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-rose-400">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/portfolio"
                    className="text-sm text-white/70 hover:text-rose-300 transition-colors"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/booking"
                    className="text-sm text-white/70 hover:text-rose-300 transition-colors"
                  >
                    Book Now
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-white/70 hover:text-rose-300 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright inside footer */}
        <div className="mx-auto max-w-7xl mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm text-white/60">
                © {new Date().getFullYear()} SH Bridal Makeover. All rights
                reserved.
              </p>
              <p className="mt-1 text-xs text-white/40">
                Jaffna, Sri Lanka • Specializing in bridal beauty
              </p>
            </div>

            <div className="flex gap-6 text-xs text-white/50">
              <Link
                href="/privacy"
                className="hover:text-rose-300 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-rose-300 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="hover:text-rose-300 transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
