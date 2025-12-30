"use client";

import { useState } from "react";
import { Send, Mail, User, MessageSquare, Phone } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert("Failed to submit form. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-16 md:py-24 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="h-1 w-8 bg-rose-500"></div>
            <h2 className="text-sm font-semibold tracking-widest text-rose-400 uppercase">
              Get In Touch
            </h2>
            <div className="h-1 w-8 bg-rose-500"></div>
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Create Your
            <span className="block text-rose-400">Dream Bridal Look?</span>
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {`Fill out the form below and we'll get back to you within 24 hours to discuss your special day.`}
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className=" backdrop-blur-sm rounded-2xl p-6 border border-rose-500/20">
              <div className="flex items-start gap-4">
                <div className="bg-rose-500/10 p-3 rounded-xl">
                  <Mail className="h-6 w-6 text-rose-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Email Us
                  </h4>
                  <a
                    href="mailto:hayathiri1311@gmail.com"
                    className="text-gray-300 hover:text-rose-300 transition-colors"
                  >
                    hayathiri1311@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className=" backdrop-blur-sm rounded-2xl p-6 border border-rose-500/20">
              <div className="flex items-start gap-4">
                <div className="bg-rose-500/10 p-3 rounded-xl">
                  <Phone className="h-6 w-6 text-rose-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Call Us
                  </h4>
                  <a
                    href="tel:+94776103470"
                    className="text-gray-300 hover:text-rose-300 transition-colors"
                  >
                    +94 77 610 3470
                  </a>
                </div>
              </div>
            </div>

            <div className=" backdrop-blur-sm rounded-2xl p-6 border border-rose-500/20">
              <div className="flex items-start gap-4">
                <div className="bg-rose-500/10 p-3 rounded-xl">
                  <MessageSquare className="h-6 w-6 text-rose-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Response Time
                  </h4>
                  <p className="text-gray-300">We respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className=" backdrop-blur-sm rounded-3xl border border-white/10 p-6 md:p-8 shadow-2xl">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/10 rounded-full mb-6">
                    <Send className="h-10 w-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-300">
                    {`Thank you for reaching out. We'll get back to you within 24 hours.`}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="hidden"
                    name="access_key"
                    value="9e3b5c10-d4f6-489f-a0ce-84d98c4df1eb"
                  />
                  <input
                    type="hidden"
                    name="subject"
                    value="New Bridal Consultation Request"
                  />
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: "none" }}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Enter your full name"
                          className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500/50 focus:border-rose-500 transition-all"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="your.email@example.com"
                          className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500/50 focus:border-rose-500 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+94 77 610 3470"
                        className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500/50 focus:border-rose-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Wedding Date
                    </label>
                    <input
                      type="date"
                      name="wedding_date"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-rose-500/50 focus:border-rose-500 transition-all"
                    />
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-gray-500" />
                      <textarea
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us about your wedding, preferred makeup style, and any special requirements..."
                        className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-500/50 focus:border-rose-500 transition-all resize-none"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full md:w-auto min-w-50 bg-linear-to-r from-rose-600 to-pink-600 text-white font-medium py-3 px-8 rounded-full overflow-hidden transition-all hover:from-rose-700 hover:to-pink-700 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </span>
                      <span className="absolute inset-0 bg-linear-to-r from-rose-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
